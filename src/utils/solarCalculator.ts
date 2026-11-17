export type PropertyType = 'residential' | 'commercial' | 'industrial';

export interface SolarCalculatorInput {
  monthlyBillInr: number;
  tariffPerKwh: number;
  propertyType: PropertyType;
  city: string;
}

export interface SolarCalculatorResult {
  monthlyConsumptionKwh: number;
  recommendedSystemKw: number;
  estimatedMonthlyGenerationKwh: number;
  estimatedMonthlySavingsInr: number;
  estimatedAnnualSavingsInr: number;
  estimatedRoofAreaSqFt: number;
  dailyYieldPerKw: number;
  utilizationFactor: number;
  assumptions: string[];
}

export interface EnquiryFormInput {
  name: string;
  phone: string;
  email: string;
  city: string;
  propertyType: string;
  monthlyBill: string;
  message: string;
}

export interface EnquiryFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  propertyType?: string;
  monthlyBill?: string;
  message?: string;
}

const CITY_SOLAR_YIELD_MAP: Record<string, number> = {
  Anand: 4.4,
  Ahmedabad: 4.5,
  Vadodara: 4.4,
  Surat: 4.3,
  Rajkot: 4.5,
  Bharuch: 4.3,
  Gandhinagar: 4.5,
  Mumbai: 4.1,
  Pune: 4.3,
  Jaipur: 4.6,
  Other: 4.2,
};

const PROPERTY_UTILIZATION_FACTOR: Record<PropertyType, number> = {
  residential: 0.85,
  commercial: 0.88,
  industrial: 0.90,
};

export function calculateSolarEstimate(input: SolarCalculatorInput): SolarCalculatorResult {
  const safeBill = Math.max(0, Number.isFinite(input.monthlyBillInr) ? input.monthlyBillInr : 0);
  const safeTariff = Math.max(1, Number.isFinite(input.tariffPerKwh) ? input.tariffPerKwh : 8);

  const dailyYieldPerKw = CITY_SOLAR_YIELD_MAP[input.city] ?? CITY_SOLAR_YIELD_MAP.Other;
  const monthlyYieldPerKw = dailyYieldPerKw * 30;
  const utilizationFactor = PROPERTY_UTILIZATION_FACTOR[input.propertyType] ?? 0.85;

  const monthlyConsumptionKwh = Math.round(safeBill / safeTariff);

  // Target offsetting consumption adjusted by property load profile
  const rawKw = (monthlyConsumptionKwh * utilizationFactor) / monthlyYieldPerKw;

  // Round to nearest 0.5 kW for systems under 10 kW, or 1 kW for larger systems
  let recommendedSystemKw = 0;
  if (safeBill > 0) {
    if (rawKw < 1) {
      recommendedSystemKw = 1;
    } else if (rawKw <= 10) {
      recommendedSystemKw = Math.round(rawKw * 2) / 2;
    } else {
      recommendedSystemKw = Math.round(rawKw);
    }
  }

  const estimatedMonthlyGenerationKwh = Math.round(recommendedSystemKw * monthlyYieldPerKw);

  // Potential savings based on generated units valued at effective tariff, bounded by 90% of current bill
  // (accounting for fixed utility demand charges, meter rent, and grid banking rules)
  const rawSavings = estimatedMonthlyGenerationKwh * safeTariff;
  const maxOffsetableBill = safeBill * 0.9;
  const estimatedMonthlySavingsInr = Math.round(Math.min(rawSavings, maxOffsetableBill));
  const estimatedAnnualSavingsInr = estimatedMonthlySavingsInr * 12;

  // Approximate shadow-free area requirement (~85 sq.ft per kW for high-efficiency mono-PERC / TOPCon modules)
  const estimatedRoofAreaSqFt = Math.round(recommendedSystemKw * 85);

  const assumptions = [
    `Calculated using an average solar irradiance yield of ${dailyYieldPerKw.toFixed(1)} kWh per kW per day for ${input.city || 'your region'} (30 billing days/month).`,
    `Assumes an average electricity tariff of ₹${safeTariff.toFixed(2)}/kWh and ${Math.round(utilizationFactor * 100)}% effective load offset for ${input.propertyType} connection profiles.`,
    `Fixed utility demand charges, meter rent, time-of-day tariffs, and state DISCOM net-metering / gross-metering settlement rules may affect actual monthly bill reductions.`,
    `Requires approximately ${estimatedRoofAreaSqFt.toLocaleString('en-IN')} sq. ft. of unshaded rooftop or ground area, subject to physical site structural assessment.`,
    `Estimates are indicative planning figures and do not constitute a guaranteed performance warranty or government subsidy determination.`,
  ];

  return {
    monthlyConsumptionKwh,
    recommendedSystemKw,
    estimatedMonthlyGenerationKwh,
    estimatedMonthlySavingsInr,
    estimatedAnnualSavingsInr,
    estimatedRoofAreaSqFt,
    dailyYieldPerKw,
    utilizationFactor,
    assumptions,
  };
}

export function validateEnquiryForm(input: EnquiryFormInput): EnquiryFormErrors {
  const errors: EnquiryFormErrors = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }

  const cleanedPhone = (input.phone || '').replace(/[\s\-()]/g, '');
  if (!cleanedPhone || !/^(\+91|91|0)?[6-9]\d{9}$/.test(cleanedPhone)) {
    errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!input.city || input.city.trim().length < 2) {
    errors.city = 'Please enter your city or site location.';
  }

  if (!input.propertyType || input.propertyType.trim().length === 0) {
    errors.propertyType = 'Please select a property category.';
  }

  if (!input.monthlyBill || input.monthlyBill.trim().length === 0) {
    errors.monthlyBill = 'Please provide your approximate monthly electricity bill.';
  }

  return errors;
}

export function buildWhatsAppEnquiryUrl(input: Partial<EnquiryFormInput>, phone = '919313804410'): string {
  const lines = [
    'Hello Jangid Solar Energy Team,',
    'I would like to request a solar consultation.',
    '',
    input.name ? `Name: ${input.name.trim()}` : '',
    input.phone ? `Phone: ${input.phone.trim()}` : '',
    input.email ? `Email: ${input.email.trim()}` : '',
    input.city ? `Location: ${input.city.trim()}` : '',
    input.propertyType ? `Property Type: ${input.propertyType.trim()}` : '',
    input.monthlyBill ? `Monthly Electricity Bill: ${input.monthlyBill.trim()}` : '',
    input.message ? `Details: ${input.message.trim()}` : '',
  ].filter(Boolean);

  return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
}

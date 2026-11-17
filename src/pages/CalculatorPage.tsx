import React, { useState } from 'react';
import { ArrowRight, Info, RotateCcw } from 'lucide-react';
import { RouteId } from '../data/siteContent';
import {
  calculateSolarEstimate,
  PropertyType,
  SolarCalculatorInput,
} from '../utils/solarCalculator';

export interface CalculatorPrefillData {
  city: string;
  propertyType: string;
  monthlyBill: string;
  message: string;
}

interface CalculatorPageProps {
  onNavigate: (route: RouteId) => void;
  onTransferToContact: (data: CalculatorPrefillData) => void;
}

const CITIES = [
  'Anand',
  'Ahmedabad',
  'Vadodara',
  'Surat',
  'Rajkot',
  'Bharuch',
  'Gandhinagar',
  'Mumbai',
  'Pune',
  'Jaipur',
  'Other',
];

const PROPERTY_TYPES: { id: PropertyType; label: string; defaultTariff: number }[] = [
  { id: 'residential', label: 'Residential', defaultTariff: 7.5 },
  { id: 'commercial', label: 'Commercial', defaultTariff: 9.0 },
  { id: 'industrial', label: 'Industrial', defaultTariff: 8.5 },
];

export const CalculatorPage: React.FC<CalculatorPageProps> = ({
  onNavigate,
  onTransferToContact,
}) => {
  const [formState, setFormState] = useState<SolarCalculatorInput>({
    monthlyBillInr: 6500,
    tariffPerKwh: 7.5,
    propertyType: 'residential',
    city: 'Anand',
  });

  const estimate = calculateSolarEstimate(formState);

  const handlePropertyTypeChange = (type: PropertyType) => {
    const matched = PROPERTY_TYPES.find((p) => p.id === type);
    setFormState((prev) => ({
      ...prev,
      propertyType: type,
      tariffPerKwh: matched ? matched.defaultTariff : prev.tariffPerKwh,
      monthlyBillInr:
        type === 'industrial' && prev.monthlyBillInr < 25000
          ? 85000
          : type === 'commercial' && prev.monthlyBillInr < 10000
          ? 25000
          : prev.monthlyBillInr,
    }));
  };

  const handleReset = () => {
    setFormState({
      monthlyBillInr: 6500,
      tariffPerKwh: 7.5,
      propertyType: 'residential',
      city: 'Anand',
    });
  };

  const handleAssessmentClick = () => {
    const propertyLabel =
      PROPERTY_TYPES.find((p) => p.id === formState.propertyType)?.label || 'Residential';

    onTransferToContact({
      city: formState.city,
      propertyType: propertyLabel,
      monthlyBill: `₹${formState.monthlyBillInr.toLocaleString('en-IN')}`,
      message: `Calculated Estimate: ~${estimate.recommendedSystemKw} kW system (${estimate.estimatedMonthlyGenerationKwh.toLocaleString(
        'en-IN'
      )} kWh/month) at ₹${formState.tariffPerKwh}/kWh tariff. Requesting a formal engineering site assessment.`,
    });
    onNavigate('contact');
  };

  return (
    <div className="bg-[#F5F5F0] text-[#101C27]">
      {/* HEADER */}
      <section className="bg-[#101C27] text-[#F5F5F0] py-12 md:py-16 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-3 animate-editorial-in">
            <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
              Interactive Sizing & Planning Tool
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.08]">
              Solar Savings Calculator.
            </h1>
            <p className="text-sm sm:text-base text-[#F5F5F0]/80 leading-relaxed max-w-2xl">
              Estimate your recommended solar capacity, monthly electricity generation, and potential utility bill reduction based on regional solar irradiance and your current billing profile.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR WORKSPACE */}
      <section className="py-12 md:py-16 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: INPUT CONTROLS (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#101C27]/15 p-8 sm:p-10 space-y-8">
            <div className="flex items-center justify-between border-b border-[#101C27]/10 pb-4">
              <h2 className="font-display text-2xl font-semibold text-[#101C27]">
                Your Consumption Profile
              </h2>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5A6570] hover:text-[#101C27] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* 1. Property Type */}
            <div className="space-y-2.5">
              <label className="block text-xs font-mono-tabular uppercase tracking-wider text-[#5A6570]">
                01. Property Type
              </label>
              <div
                role="group"
                aria-label="Property Type"
                className="grid grid-cols-3 gap-2 bg-[#F5F5F0] p-1.5 border border-[#101C27]/10"
              >
                {PROPERTY_TYPES.map((item) => {
                  const active = formState.propertyType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handlePropertyTypeChange(item.id)}
                      className={`py-2.5 px-3 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                        active
                          ? 'bg-[#101C27] text-[#C6F36B]'
                          : 'text-[#5A6570] hover:text-[#101C27]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Monthly Electricity Bill */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="calc-monthly-bill"
                  className="text-xs font-mono-tabular uppercase tracking-wider text-[#5A6570]"
                >
                  02. Monthly Electricity Bill (₹)
                </label>
                <span className="font-mono-tabular text-sm font-semibold text-[#101C27]">
                  ₹{formState.monthlyBillInr.toLocaleString('en-IN')} / mo
                </span>
              </div>

              <input
                id="calc-monthly-bill"
                type="number"
                min={500}
                max={5000000}
                step={500}
                value={formState.monthlyBillInr}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    monthlyBillInr: Math.max(0, Number(e.target.value) || 0),
                  }))
                }
                className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#101C27]/20 text-[#101C27] font-mono-tabular text-base focus:outline-none focus:border-[#101C27]"
              />

              <input
                aria-label="Monthly electricity bill slider"
                type="range"
                min={1000}
                max={formState.propertyType === 'residential' ? 50000 : 500000}
                step={500}
                value={Math.min(
                  formState.monthlyBillInr,
                  formState.propertyType === 'residential' ? 50000 : 500000
                )}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    monthlyBillInr: Number(e.target.value),
                  }))
                }
                className="w-full accent-[#101C27] cursor-pointer"
              />

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {(formState.propertyType === 'residential'
                  ? [3500, 6500, 12000, 25000]
                  : [25000, 75000, 150000, 350000]
                ).map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() =>
                      setFormState((prev) => ({ ...prev, monthlyBillInr: preset }))
                    }
                    className="px-2.5 py-1 text-xs font-mono-tabular border border-[#101C27]/15 bg-[#F5F5F0] hover:border-[#101C27] text-[#101C27] cursor-pointer"
                  >
                    ₹{preset.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Electricity Tariff */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="calc-tariff"
                  className="text-xs font-mono-tabular uppercase tracking-wider text-[#5A6570]"
                >
                  03. Electricity Tariff (₹ / kWh)
                </label>
                <span className="font-mono-tabular text-sm font-semibold text-[#101C27]">
                  ₹{formState.tariffPerKwh.toFixed(2)} / unit
                </span>
              </div>

              <input
                id="calc-tariff"
                type="number"
                min={3}
                max={20}
                step={0.25}
                value={formState.tariffPerKwh}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    tariffPerKwh: Math.max(1, Number(e.target.value) || 7.5),
                  }))
                }
                className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#101C27]/20 text-[#101C27] font-mono-tabular text-base focus:outline-none focus:border-[#101C27]"
              />
              <p className="text-xs text-[#5A6570]">
                Typical Gujarat / India tariffs range between ₹6.50 and ₹10.50 per kWh depending on DISCOM and category.
              </p>
            </div>

            {/* 4. City / Location */}
            <div className="space-y-2.5">
              <label
                htmlFor="calc-city"
                className="block text-xs font-mono-tabular uppercase tracking-wider text-[#5A6570]"
              >
                04. City / Region
              </label>
              <select
                id="calc-city"
                value={formState.city}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, city: e.target.value }))
                }
                className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#101C27]/20 text-[#101C27] text-sm font-medium focus:outline-none focus:border-[#101C27]"
              >
                {CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* RIGHT: CALCULATED OUTPUTS & ASSUMPTIONS (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#101C27] text-[#F5F5F0] p-8 sm:p-12 border border-white/10 space-y-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-6">
                <div>
                  <p className="text-xs font-mono-tabular uppercase tracking-widest text-[#C6F36B]">
                    Indicative Engineering Estimate
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold mt-1">
                    Recommended System & Yield
                  </h2>
                </div>
                <div className="text-xs font-mono-tabular text-[#F5F5F0]/70">
                  {formState.city} · {formState.propertyType.toUpperCase()}
                </div>
              </div>

              {/* 4 Primary Required Output Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 border border-white/15 bg-white/[0.03] space-y-2">
                  <p className="text-xs font-mono-tabular uppercase text-[#F5F5F0]/65">
                    Estimated System Capacity
                  </p>
                  <p
                    data-testid="calc-system-capacity"
                    className="font-display font-mono-tabular text-4xl sm:text-5xl font-semibold text-[#C6F36B]"
                  >
                    {estimate.recommendedSystemKw} <span className="text-xl font-normal">kW</span>
                  </p>
                  <p className="text-xs text-[#F5F5F0]/60">
                    Approx. {estimate.estimatedRoofAreaSqFt.toLocaleString('en-IN')} sq. ft. shadow-free area
                  </p>
                </div>

                <div className="p-6 border border-white/15 bg-white/[0.03] space-y-2">
                  <p className="text-xs font-mono-tabular uppercase text-[#F5F5F0]/65">
                    Estimated Monthly Generation
                  </p>
                  <p
                    data-testid="calc-monthly-generation"
                    className="font-display font-mono-tabular text-4xl sm:text-5xl font-semibold text-[#F5F5F0]"
                  >
                    {estimate.estimatedMonthlyGenerationKwh.toLocaleString('en-IN')}{' '}
                    <span className="text-xl font-normal">kWh</span>
                  </p>
                  <p className="text-xs text-[#F5F5F0]/60">
                    Based on {estimate.dailyYieldPerKw.toFixed(1)} kWh/kW/day solar irradiance
                  </p>
                </div>

                <div className="p-6 border border-white/15 bg-white/[0.03] space-y-2">
                  <p className="text-xs font-mono-tabular uppercase text-[#F5F5F0]/65">
                    Estimated Potential Monthly Savings
                  </p>
                  <p
                    data-testid="calc-monthly-savings"
                    className="font-display font-mono-tabular text-4xl sm:text-5xl font-semibold text-[#C6F36B]"
                  >
                    ₹{estimate.estimatedMonthlySavingsInr.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-[#F5F5F0]/60">
                    Est. monthly consumption: {estimate.monthlyConsumptionKwh.toLocaleString('en-IN')} kWh
                  </p>
                </div>

                <div className="p-6 border border-white/15 bg-white/[0.03] space-y-2">
                  <p className="text-xs font-mono-tabular uppercase text-[#F5F5F0]/65">
                    Estimated Annual Savings
                  </p>
                  <p
                    data-testid="calc-annual-savings"
                    className="font-display font-mono-tabular text-4xl sm:text-5xl font-semibold text-[#F5F5F0]"
                  >
                    ₹{estimate.estimatedAnnualSavingsInr.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-[#F5F5F0]/60">
                    12-month cumulative electricity bill offset
                  </p>
                </div>
              </div>

              {/* Primary CTA inside Calculator */}
              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <p className="text-xs text-[#F5F5F0]/75 max-w-md leading-relaxed">
                  Carry these sizing numbers directly into a consultation request with our solar engineers in Anand.
                </p>

                <button
                  type="button"
                  onClick={handleAssessmentClick}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#C6F36B] text-[#101C27] text-xs font-semibold uppercase tracking-wider hover:bg-[#d4f78b] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Get a Professional Solar Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Clearly Stated Assumptions Box */}
            <div className="bg-white border border-[#101C27]/15 p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[#101C27] font-semibold">
                <Info className="w-4 h-4 text-[#101C27]" />
                <span>Calculation Methodology & Assumptions</span>
              </div>

              <ul className="space-y-2.5 text-xs text-[#5A6570] leading-relaxed list-disc pl-5">
                {estimate.assumptions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

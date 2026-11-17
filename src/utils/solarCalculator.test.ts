import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateSolarEstimate,
  validateEnquiryForm,
  buildWhatsAppEnquiryUrl,
} from './solarCalculator';

test('calculateSolarEstimate computes realistic residential solar sizing and savings', () => {
  const result = calculateSolarEstimate({
    monthlyBillInr: 6000,
    tariffPerKwh: 8,
    propertyType: 'residential',
    city: 'Anand',
  });

  // 6000 / 8 = 750 kWh monthly consumption
  assert.equal(result.monthlyConsumptionKwh, 750);
  // 750 * 0.85 = 637.5 kWh target / (4.4 * 30 = 132 kWh/kW) = 4.829 kW -> rounds to 5 kW
  assert.equal(result.recommendedSystemKw, 5);
  assert.equal(result.estimatedMonthlyGenerationKwh, 660);
  // 660 * 8 = 5280, capped by 90% of 6000 = 5400 -> 5280
  assert.equal(result.estimatedMonthlySavingsInr, 5280);
  assert.equal(result.estimatedAnnualSavingsInr, 5280 * 12);
  assert.equal(result.estimatedRoofAreaSqFt, 425);
  assert.ok(result.assumptions.length >= 4);
});

test('calculateSolarEstimate handles industrial high-bill calculation accurately', () => {
  const result = calculateSolarEstimate({
    monthlyBillInr: 250000,
    tariffPerKwh: 9,
    propertyType: 'industrial',
    city: 'Ahmedabad',
  });

  assert.ok(result.recommendedSystemKw > 150);
  assert.ok(result.estimatedMonthlySavingsInr <= 250000 * 0.9);
  assert.equal(result.estimatedAnnualSavingsInr, result.estimatedMonthlySavingsInr * 12);
});

test('validateEnquiryForm catches empty or malformed fields and passes valid Indian numbers', () => {
  const invalidErrors = validateEnquiryForm({
    name: 'A',
    phone: '12345',
    email: 'not-an-email',
    city: '',
    propertyType: '',
    monthlyBill: '',
    message: '',
  });

  assert.ok(invalidErrors.name);
  assert.ok(invalidErrors.phone);
  assert.ok(invalidErrors.email);
  assert.ok(invalidErrors.city);
  assert.ok(invalidErrors.propertyType);
  assert.ok(invalidErrors.monthlyBill);

  const validErrors = validateEnquiryForm({
    name: 'Rajesh Patel',
    phone: '+91 98765 43210',
    email: 'rajesh@example.com',
    city: 'Anand',
    propertyType: 'Residential',
    monthlyBill: '₹5,500',
    message: 'Looking for rooftop solar.',
  });

  assert.equal(Object.keys(validErrors).length, 0);
});

test('buildWhatsAppEnquiryUrl constructs encoded wa.me URL', () => {
  const url = buildWhatsAppEnquiryUrl({
    name: 'Kiran Desai',
    city: 'Vadodara',
    propertyType: 'Commercial',
    monthlyBill: '₹45,000',
  });

  assert.ok(url.startsWith('https://wa.me/919313804410?text='));
  assert.ok(url.includes(encodeURIComponent('Kiran Desai')));
  assert.ok(url.includes(encodeURIComponent('Vadodara')));
});

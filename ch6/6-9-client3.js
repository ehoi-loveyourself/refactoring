import { acquireReading, baseRate } from './6-9.js';

const aReading = acquireReading();

function calculateBaseCharge(aReading) { // 이거를 지금 6-9-client2.js에서 쓰고 있어서 중복됨
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

const basicChargeAmount = calculateBaseCharge(aReading);

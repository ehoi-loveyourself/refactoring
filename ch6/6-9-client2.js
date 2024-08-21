import { acquireReading, baseRate } from './6-9.js';

const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity; // 이것도 메서드로 만들어서 메서드에서 꺼내쓰게 할 수 있어

function taxThreshold(year) {
  return 0.1;
} // 얘는 매개변수 들어오는 거랑 상관없이 무조건 0.1를 리턴하고 있으니까 매개변수 빼고

export const taxableCharge = Math.max(0, base - taxThreshold(aReading.year)); // 이것도 메서드로 만들어서 쓸 수 있게 처리

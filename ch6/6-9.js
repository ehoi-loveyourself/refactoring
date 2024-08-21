const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }; // 이걸 클래스로 만들어야 할 것 같고

export function acquireReading() {
  return reading; // 여기서 new instance 하도록
}

export function baseRate(month, year) { // 클래스 내부의 메서드로 만들어야 함
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

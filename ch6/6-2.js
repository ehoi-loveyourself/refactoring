// [함수 인라인]

// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
// line을 report 한다
function reportLines(customer) {
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}

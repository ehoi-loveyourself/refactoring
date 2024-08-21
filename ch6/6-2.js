// [함수 인라인]

// 예제 1
// 배달을 5번이나 늦게 한 driver 라면 2 아니면 1
export function rating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

// 배달을 5번 늦게 한 driver 인지
function moreThanFiveLateDeliveries(dvr) {
  return dvr.numberOfLateDeliveries > 5;
}

// 예제 2
// line을 report 한다
function reportLines(customer) {
  const lines = [];
  gatherCustomerData(lines, customer);
  return lines;
}

// customer를 인자로 받아서 name, location을 line에 담는다
function gatherCustomerData(out, customer) {
  out.push(['name', customer.name]);
  out.push(['location', customer.location]);
}

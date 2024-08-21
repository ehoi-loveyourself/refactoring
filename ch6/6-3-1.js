export function price(order) {
  const basicPrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const deliverFee = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  return basicPrice - discount + deliverFee;
  // return (
  //   order.quantity * order.itemPrice - // 기본가격 
  //   Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 + // 수량할인
  //   Math.min(order.quantity * order.itemPrice * 0.1, 100) // 배송비
  // ); // 각각 변수화해서 가독성을 높이자
}

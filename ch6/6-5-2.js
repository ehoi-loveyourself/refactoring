// [함수 선언 바꾸기]
// 1. 리팩토링을 어디 해야하는지 모르겠음

export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  addReservation(customer, isPrioirty) { // 2. 이렇게 flag를 통해 우선순위를 가지고 있는지 아닌지에 따라 로직을 다르게 처리하는 식의 메서드는 좋은 것이 아님
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}

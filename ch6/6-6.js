export class Person {
  #firstName;
  #lastName;
  
  constructor(data) {
    this.#firstName = data.firstName;
    this.#lastName = data.lastName;
  }
  
  get firstName() {
    return this.#firstName;
  }
  
  get lastName() {
    return this.#lastName;f
  }
}

let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  return defaultOwner;
}

// let defaultOwner = { firstName: '마틴', lastName: '파울러' };
let defaultOwner = new DefaultOwner('마틴', '파울러');

export class DefaultOwner {
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get firstName() {
    return this.#firstName;
  }

   get lastName() {
    return this.#lastName;f
   }
}

export function getDefaultOwner() {
  return defaultOwner;
}

const result = getDefaultOwner();
console.log(result);
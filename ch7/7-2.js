export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [ ...this.#courses ];
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
const course = new Course('리팩토링', true);
ellie.addCourse(course);
console.log(ellie.courses.length); // 외부에서 course를 업데이트 하지 못하도록 하였기 때문에 undefined가 나옴
ellie.removeCourse(course, () => {
  console.log("해당 강의는 존재하지 않습니다.");
});
console.log(ellie.courses.length);
ellie.removeCourse(course, () => {
  console.log("해당 강의는 존재하지 않습니다.");
}); // 한번 더 삭제하면 로그가 뜬다.

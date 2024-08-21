// [매개변수 객체 만들기]

export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp)); // 각 reading이 range 범위에서 벗어나는지 확인하는 메서드까지 NumberRange가 관리해주면 좋다
}

export class NumberRange {
  #min;
  #max;

  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  contains(num) {
    return num >= this.#min && num <= this.#max;
  }
}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

const operationPlan = new NumberRange(51, 53);

const result = readingsOutsideRange(station, operationPlan);
console.log(result);

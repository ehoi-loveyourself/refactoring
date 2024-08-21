// [매개변수 객체 만들기]

export function readingsOutsideRange(station, operationPlan) {
  return station.readings.filter((r) => r.temp < operationPlan.temperatureFloor || r.temp > operationPlan.temperatureCeiling);
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

const operationPlan = {
  temperatureFloor: 51,
  temperatureCeiling: 53,
};

const result = readingsOutsideRange(
  station,
  operationPlan // 객체의 두 매개변수를 각각 보낼 바에 객체 그 자체를 보낸다.
);

console.log(result);

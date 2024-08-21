let defaultOwner = { firstName: '마틴', lastName: '파울러' }; // 1. 이렇게 두면 defaultOwner의 값이 변경된다

export function getDefaultOwner() {
  return defaultOwner;
}

const result = getDefaultOwner();
console.log(result);
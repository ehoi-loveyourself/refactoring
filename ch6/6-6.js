let defaultOwner = { firstName: '마틴', lastName: '파울러' };

export function getDefaultOwner() {
  return { ...defaultOwner }; // 얕은 복사
}
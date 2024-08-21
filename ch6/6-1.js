export function printOwing(invoice) {
  // 1. 배너를 출력하는 기능
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
  
  let outstanding = 0; // 지역변수는 사용하는 곳과 가장 가까운 곳에 두는 것이 좋음 (예전에는 메서드 내에서 사용하는 변수를 한 군데에서 선언하는 게 관행이었다고 함)
  // calculate outstanding : 2. 총 가격을 더해가는 기능
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  
  // 3. record due date : 지금으로부터 30일 뒤를 due date를 계산
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  ); // 객체를 수정하고 있군 -> 객체의 불변성을 지켜주지 못하고 있음

  // 4. print details : 세부사항 출력
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);

/**
 * 프로그래밍에서 중요한 것
 * 1. 변수: 어떤 데이터가 들어있는지 알아보기 쉽도록 네이밍
 * 2. 함수: 어떤 일을 하는지 알아보기 쉽도록 네이밍 
 * 3. 모듈: 어떤 책임을 가지고 있는지, 변수와 함수와 밀접하게 관련이 있는지
 * 
 * 변수, 함수 리팩토링: low-level refactoring
 * 모듈: high-level refactoring
 */
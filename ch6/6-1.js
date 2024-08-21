export function printOwing(invoice) {
  let outstanding = 0;

  // 1. 로그 형식을 고치면 좋을 것 같아.
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  // 2. 뭔가 기능을 하는 함수를 따로 추출하면 좋을 것 같아
  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount; // 3. outstanding이라는 변수인데 amount에 더하니까 정확히 뭘 하는지 모르겠어
  }

  // 2. 마찬가지
  // record due date
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  //print details
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
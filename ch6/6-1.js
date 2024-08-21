export function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(invoice) {
  return invoice.orders.reduce((sum, order) => sum += order.amount, 0);
  // let result = 0;
  // for (const o of invoice.orders) {
  //   result += o.amount;
  // }
  // return result;
}

function recordDueDate(invoice) {
    const today = new Date();
    invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );
}

function printDetails(invoice, outstanding) {
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
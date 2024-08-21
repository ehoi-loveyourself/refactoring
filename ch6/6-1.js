export function printOwing(invoice) {
  let outstanding = 0;

  // 1. 로그 형식을 고치면 좋을 것 같아.
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  // 2. 뭔가 기능을 하는 함수를 따로 추출하면 좋을 것 같아
  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
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

export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  // 여기 Order 클래스 내부에서 highPriorityCount를 구할 수 있도록 메서드를 제공하면 좋을 것 같은데 어떻게 하면 될지 모르겠다.
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority
).length;

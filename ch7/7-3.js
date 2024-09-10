export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  // 1. 여기 Order 클래스 내부에서 highPriorityCount를 구할 수 있도록 메서드를 제공하면 좋을 것 같은데 어떻게 하면 될지 모르겠다.
  
  // 3. 우선순위를 결정하는 책임을 Order 안에 넣어준다.
  // 5. [장점] 나중에 priority에 'super urgent' 가 생길 수도 있고 아니면 기존의 값이 변경될 수도 있는데 
  // 그 때 이렇게 메서드를 한 곳에서 관리해주면 수정하기도 쉽고(유지보수 하기도 쉽고) 
  // 해당 메서드를 여러 곳에서 사용하면 되니까 재사용성도 높아진다.
  isHighPriority() {
    return 'high' === o.priority || 'rush' === o.priority;
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

// 2. order의 우선순위를 리턴해주는 로직이 외부에 있다. 이것을 행할 책임이 있는 곳은 어디인가? Order가 아닐까? Order 안으로 들어가야 한다!
// 4. 그리고 외부에서는 order 객체에서 메서드를 호출해서 쓴다. (나는 필터까지 다 해서 리턴하는 걸 생각했는데
// 그건 데이터를 가용해서 쓰려는 사람에게 자유를 주어야 하니까 적절하게 리팩토링 하는 것이 중요하다는 생각이 들었다.)
const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;

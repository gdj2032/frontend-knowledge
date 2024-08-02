// ### 3.20 访问者模式 Visitor Pattern

// 定义一个Element基类，所有元素类将继承它
class Element {
  constructor(name) {
    this.name = name;
  }

  // accept方法用于接受访问者的访问
  accept(visitor) {
    visitor.visit(this);
  }
}

// 定义两个具体的元素类
class ConcreteElementA extends Element {
  accept(visitor) {
    visitor.visitConcreteElementA(this);
  }
}

class ConcreteElementB extends Element {
  accept(visitor) {
    visitor.visitConcreteElementB(this);
  }
}

// 定义一个Visitor基类，所有访问者类将继承它
class Visitor {
  visit(element) {
    console.log(`Visiting the ${element.name} element`);
  }
}

// 定义具体的访问者类
class ConcreteVisitor extends Visitor {
  visitConcreteElementA(element) {
    console.log(`ConcreteVisitor visits ${element.name}`);
  }

  visitConcreteElementB(element) {
    console.log(`ConcreteVisitor visits ${element.name}`);
  }
}

// 使用示例
const elementA = new ConcreteElementA('A');
const elementB = new ConcreteElementB('B');
const visitor = new ConcreteVisitor();

elementA.accept(visitor);
elementB.accept(visitor);

// 定义了一个Element基类和两个具体的元素类。然后我们定义了一个Visitor基类和一个具体的访问者类。
// 每个元素类都有一个accept方法，该方法接受一个访问者对象并调用访问者的一个方法，该方法针对特定的元素类型。
// 在使用时，我们创建了一个具体的元素实例和一个具体的访问者实例，并通过调用元素的accept方法来触发访问者模式。

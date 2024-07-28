// ### 3.12 观察者模式 Observer Pattern

// 主题 保存状态，状态变化之后触发所有观察者对象
class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }

  getState() {
    return this.state;
  }

  setState(s) {
    this.state = s;
  }

  notifyAll() {
    this.observers.forEach(e => {
      console.info('--- update 通知 --->', e.name, ', 当前状态为: ', this.state);
    });
  }

  attach(o) {
    this.observers.push(o);
  }
}

// 观察者
class Observer {
  constructor(name, sub) {
    this.name = name;
    sub.attach(this);
  }
}

const subject = new Subject();

const observer1 = new Observer('o1', subject);
const observer2 = new Observer('o2', subject);

subject.setState(12);

subject.notifyAll();

const obj = {
  name: 'tom',
  sleep() {
    console.info('--- 睡觉1 ---> ', this.name);
  }
};

// 1. Object.create() 方法会使用指定的原型对象及其属性去创建一个新的对象。

const obj2 = Object.create(obj);
obj2.name = 'jack';
obj2.sleep();

// 2. 自定义创建原型对象

const car = {
  init(name) {
    this.name = name;
  },
  getName() {
    console.info('--- 车名2 --->', this.name);
  }
};

function newCar(name) {
  function fn() {}
  fn.prototype = car;
  const f = new fn();
  f.init(name);
  return f;
}

const car2 = new newCar('自行车');
car2.getName();

// 3.类继承
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.info('--- 车名3 --->', this.name);
    return this.name;
  }
}

class Car extends Vehicle {
  constructor(name) {
    super(name);
  }

  say() {
    this.getName();
  }
}

new Car('火车').say();

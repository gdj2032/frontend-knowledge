// ### 3.8 外观模式 Facade Pattern
// 以计算器为例

class Sum {
  sum(a, b) {
    return a + b;
  }
}

class Minus {
  minus(a, b) {
    return a - b;
  }
}
class Multiply {
  multiply(a, b) {
    return a * b;
  }
}

class Div {
  div(a, b) {
    return a / b;
  }
}

class Calculator {
  constructor() {
    this.sumObj = new Sum();
    this.minusObj = new Minus();
    this.multiplyObj = new Multiply();
    this.divObj = new Div();
  }
  sum(...args) {
    return this.sumObj.sum(...args);
  }
  minus(...args) {
    return this.minusObj.minus(...args);
  }
  multiply(...args) {
    return this.multiplyObj.multiply(...args);
  }
  div(...args) {
    return this.divObj.div(...args);
  }
}

const calc = new Calculator();
calc.sum(1, 2);

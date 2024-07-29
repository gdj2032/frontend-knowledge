// ### 3.15 模板方法模式 TemplateMethod Pattern

/**
 * 例子: 咖啡与茶
 * 泡咖啡步骤如下：
 * 1.把水煮沸
 * 2.用沸水冲泡咖啡
 * 3.将咖啡倒入杯子中
 * 4.添加糖和牛奶
 *
 * 泡茶步骤如下：
 * 1.把水煮沸
 * 2.用沸水冲泡茶
 * 3.将茶倒入杯子中
 * 4.添加柠檬
 */

// 公共类Beverage
class Beverage() {
  constructor() {
  }
  boilWater() {
    console.log("把水煮沸");
  }
  brew = function () {}; // 冲泡动作
  pourInCup = function () {}; // 倒入杯子
  addCondiments = function () {}; // 添加调料
  init() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }
}

class Coffee extends Beverage {
  // 重写父类方法
  brew = function () {
    console.log("用沸水冲泡咖啡");
  };
  pourInCup = function () {
    console.log("把咖啡倒进杯子");
  };
  addCondiments = function () {
    console.log("加糖和牛奶");
  };
}

class Tea extends Beverage {
  // 重写父类方法
  steepTeaBag = function () {
    console.log("用沸水浸泡茶叶");
  };
  pourInCup = function () {
    console.log("把茶水倒进杯子");
  };
  addCondiments = function () {
    console.log("加柠檬");
  };
}

var coffee = new Coffee();
coffee.init();

var tea = new Tea();
tea.init();

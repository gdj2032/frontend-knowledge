// ### 3.14 策略模式 Strategy Pattern

// 例子: 绩效为S的人年终奖有4倍工资，绩效为A的人年终奖有3倍工资，绩效为B的人年终奖为2倍工资

/**
 * 以下代码 复用性差
var calcBonus = function (level, salary) {
  if (level === 'S') {
    return salary * 4;
  }
  if (level === 'A') {
    return salary * 3;
  }
  if (level === 'B') {
    return salary * 2;
  }
};

var levelS = function (salary) {
  return salary * 4;
};

var levelA = function (salary) {
  return salary * 3;
};

var levelB = function (salary) {
  return salary * 2;
};

var calcBonus = function (level, salary) {
  if (level === "S") {
    return levelS(salary);
  }
  if (level === "A") {
    return levelA(salary);
  }
  if (level === "B") {
    return levelB(salary);
  }
};
 */

var levelS = function () {};
levelS.prototype.calculate = function (salary) {
  return salary * 4;
};

var levelA = function () {};
levelA.prototype.calculate = function (salary) {
  return salary * 3;
};

var levelB = function () {};
levelB.prototype.calculate = function (salary) {
  return salary * 2;
};

// 定义一个奖金类Bouns
var Bonus = function () {
  this.salary = null; // 原始工资
  this.strategy = null; // 绩效等级对应的策略对象
};

Bonus.prototype.setSalary = function (salary) {
  this.salary = salary; // 设置员工的原始工资
};

Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy; // 设置员工绩效等级对应的策略对象
};

Bonus.prototype.getBonus = function () {
  // 取得奖金数额
  return this.strategy.calculate(this.salary); // 把计算奖金的操作委托给对应的策略对象
};

// 计算奖金
var bonus = new Bonus(); // 创建Bonus实例对象
bonus.setSalary(1000); // 设置员工的初始工资

bonus.setStrategy(new levelS()); // 设置策略对象
console.log(bonus.getBonus()); // 输出：4000

bonus.setStrategy(new levelA()); // 设置策略对象
console.log(bonus.getBonus()); // 输出：3000

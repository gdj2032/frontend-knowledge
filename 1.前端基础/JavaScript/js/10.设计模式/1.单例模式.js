/**
 * 单例模式（Singleton Pattern）：确保一个类只有一个实例，并提供一个全局访问点。
 *
 * 在JavaScript中，单例模式可以通过几种方式实现：
 * 1.使用一个变量来记录单例实例是否已经被创建。
 * 2.使用闭包来创建私有变量。
 * 3.使用Object.defineProperty来创建具有私有变量的单例。
 */

// 1.使用一个变量来记录单例实例是否已经被创建。
let singleton;
const getSingleton = (function () {
  return function (Constructor, ...args) {
    if (!singleton) {
      singleton = new Constructor(...args);
    }
    return singleton;
  };
})();

// 2.使用闭包来创建私有变量。
const Singleton1 = (function () {
  let instance = null;
  class Singleton {
    constructor() {
      if (instance) {
        return instance;
      }
      instance = this;
    }
    // 类的方法和属性
  }
  return Singleton;
})();

// 3.使用Object.defineProperty来创建具有私有变量的单例。
class Singleton2 {
  static instance;
  constructor() {
    if (Singleton2.instance) {
      return Singleton2.instance;
    }
    Singleton2.instance = this;
  }
  // 类的方法和属性
}

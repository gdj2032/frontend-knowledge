// 抽象工厂
class AbstractCarFactory {
  createCar() {
    throw new Error('抽象方法，需要子类实现');
  }

  createTires() {
    throw new Error('抽象方法，需要子类实现');
  }

  createInterior() {
    throw new Error('抽象方法，需要子类实现');
  }
}

// 具体工厂
class LuxuryCarFactory extends AbstractCarFactory {
  createCar() {
    return new LuxuryCar();
  }
  createTires() {
    return new PremiumTires();
  }
  createInterior() {
    return new LeatherInterior();
  }
}

// 产品类
class Car {}
class LuxuryCar extends Car {}
class Tires {}
class PremiumTires extends Tires {}
class Interior {}
class LeatherInterior extends Interior {}

// 使用
const factory = new LuxuryCarFactory();
const car = factory.createCar();
const tires = factory.createTires();
const interior = factory.createInterior();

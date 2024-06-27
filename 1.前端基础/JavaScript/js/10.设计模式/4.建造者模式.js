// 3.4 建造者模式 Builder
//商店：Director指挥者类
class KFCShop {
  constructor() {}
  init(builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  }
}

class log {
  static log = '我要';
  static add(l) {
    this.log += l;
  }
  static show() {
    console.info('--- log --->', this.log);
  }
}

class Builder {
  build;
  constructor() {}
  step1() {
    this.build = null;
  }
  step2() {
    this.build.addQuantity();
  }
  get() {
    return this.build;
  }
}

class HamburgerBuilder extends Builder {
  constructor() {
    super();
  }
  step1() {
    this.build = new Hamburger();
  }
}

class FrenchFriesBuilder extends Builder {
  constructor() {
    super();
  }
  step1() {
    this.build = new FrenchFries();
  }
}

class CommonEat {
  quantity;
  constructor() {
    this.quantity = 1;
  }
  addQuantity() {
    this.quantity = 6;
  }
  say() {
    log.add('我要' + this.quantity + '个吃的！');
  }
}

class Hamburger extends CommonEat {
  constructor() {
    super();
  }
  addQuantity() {
    this.quantity = 6;
  }
  say() {
    log.add(this.quantity + '个汉堡包！');
  }
}
class FrenchFries extends CommonEat {
  constructor() {
    super();
  }
  addQuantity() {
    this.quantity = 2;
  }
  say() {
    log.add(this.quantity + '份薯条！');
  }
}

var shop = new KFCShop();
var hamBuilder = new HamburgerBuilder();
var friesBuilder = new FrenchFriesBuilder();
var hamburgerOrder = shop.init(hamBuilder);
var friesOrder = shop.init(friesBuilder);
hamburgerOrder.say();
friesOrder.say();
log.show();

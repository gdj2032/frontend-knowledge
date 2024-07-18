// ### 3.9 桥接模式 Bridge Pattern
// 多对多的关系 例子 做一个香蕉味的芝士蛋糕

// 蛋糕(角色)
class Cake {
  juice: Juice;
  constructor(juice: Juice) {
    this.juice = juice;
  }
  getCake() {}
}

// 果汁(角色)
class Juice {
  getJuice() {}
}

//拓展抽象化角色-芝士蛋糕
class CheeseCake extends Cake {
  constructor(juice) {
    super(juice);
  }
  getCake() {
    //组合果汁和芝士蛋糕
    return this.juice.getJuice() + ' Cheese Cake';
  }
}

//拓展抽象化角色-草莓蛋糕
class BerriesCake extends Cake {
  getCake() {
    //组合果汁和草莓蛋糕
    return this.juice.getJuice() + ' Berries Cake';
  }
}

//具体实现化角色-香蕉汁
class BananaJuice extends Juice {
  getJuice() {
    return 'BananaJuice';
  }
}
//具体实现化角色-苹果汁
class AppleJuice extends Juice {
  getJuice() {
    return 'AppleJuice';
  }
}

class PrepareCake {
  static main() {
    //取一杯香蕉汁
    let bananaJuice = new BananaJuice();
    //香蕉汁倒入芝士蛋糕中
    let cheeseCake = new CheeseCake(bananaJuice);
    //香蕉芝士蛋糕成型
    let cake = cheeseCake.getCake();
    console.log(cake);
  }
}
PrepareCake.main();

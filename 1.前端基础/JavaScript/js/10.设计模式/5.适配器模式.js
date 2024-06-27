// ### 3.5 适配器模式 Adapter Pattern

// 1.类适配器
// 目标接口
class Target {
  request() {}
}

// 被适配者
class Adaptee {
  specificRequest() {
    console.log("Adaptee's specific request");
  }
}

// 类适配器
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request() {
    this.adaptee.specificRequest();
  }
}

// 客户端
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.request(); // 输出：Adaptee's specific request

// 2.对象适配器

// 对象适配器
// class Adapter {
//   constructor(adaptee) {
//     this.adaptee = adaptee;
//   }

//   request() {
//     this.adaptee.specificRequest();
//   }
// }

// 客户端
const adaptee2 = {
  specificRequest: function () {
    console.log("Adaptee2's specific request");
  }
};

const adapter2 = new Adapter(adaptee2);
adapter2.request(); // 输出：Adaptee's specific request

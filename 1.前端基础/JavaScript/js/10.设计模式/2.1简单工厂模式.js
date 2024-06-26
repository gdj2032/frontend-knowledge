class Vehicle {
  //构造器
  constructor(opt) {
    this.name = opt.name;
    this.characteristic = opt.characteristic;
  }

  //静态方法
  static getInstance(role) {
    switch (role) {
      case 'bicycle':
        return new Vehicle({ name: '自行车', characteristic: ['便宜', '方便', '慢'] });
        break;
      case 'car':
        return new User({ name: '轿车', characteristic: ['耗油', '自驾', '方便'] });
        break;
      case 'bar':
        return new User({ name: '公交车', characteristic: ['慢', '便宜', '固定'] });
        break;
      default:
        throw new Error('参数错误, 可选参数:bicycle,car,bar');
    }
  }
}

//调用
let bicycle = Vehicle.getInstance('bicycle');
let car = Vehicle.getInstance('car');
let bar = Vehicle.getInstance('bar');

class Vehicle {
  constructor(name = '', viewPage = []) {
    if (new.target === Vehicle) {
      throw new Error('抽象类不能实例化!');
    }
    this.name = name;
    this.viewPage = viewPage;
  }
}

class VehicleFactory extends Vehicle {
  constructor(name, viewPage) {
    super(name, viewPage);
  }
  create(role) {
    switch (role) {
      case 'bicycle':
        return new Vehicle({ name: '自行车', characteristic: ['便宜', '方便', '慢'] });
        break;
      case 'car':
        return new Vehicle({ name: '轿车', characteristic: ['耗油', '自驾', '方便'] });
        break;
      case 'bar':
        return new Vehicle({ name: '公交车', characteristic: ['慢', '便宜', '固定'] });
        break;
      default:
        throw new Error('参数错误, 可选参数:bicycle,car,bar');
    }
  }
}

let barFactory = new VehicleFactory();
let bicycle = barFactory.create('bicycle');
let car = barFactory.create('car');
let bar = barFactory.create('bar');

// ### 3.1 Object.create()
const obj = Object.create({ a: 1 }, { b: { value: 2 } }); // obj = {}
// 第一个参数为对象，对象为函数调用之后返回新对象的原型对象，第二个参数为对象本身的实例方法（默认不能修改,不能枚举）
const bool1 = obj.__proto__.a === 1; // true
obj.b = 3; // obj.b: 2

const obj1_1 = Object.create({}, {
  p: {
    value: 2, // 属性值
    writable: true, // 是否可编辑
    enumerable: true, //是否可枚举
    configurable: true //是否可修改以上几项配置
  }
})

obj1_1.p = 3; // obj1_1: { p: 3 }
// 注意： enumerable 会影响以下
// for…in  遍历包括对象原型上属性
// Object.keys()   只能遍历自身属性
// JSON.stringify  只能序列化自身属性

console.info('--- Object.create() --->', { obj, bool1, obj1_1 });

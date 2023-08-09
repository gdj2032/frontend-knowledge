// ### 3.3 Object.defineProperty() 定义对象属性
const obj3 = {}
Object.defineProperty(obj3, 'a', {
  value: 11,
  writable: false, // 不可编辑
})
obj3.a = 12; // obj.a: 11
console.info('--- Object.defineProperty()1 --->', obj3.a);
// --------------------------------
const obj3_1 = {}
// 1. 使用 null 原型：没有继承的属性
const descriptor = Object.create(null);
descriptor.value = 'static'

// 默认情况下，它们不可枚举、不可配置、不可写
Object.defineProperty(obj3_1, "key", descriptor);

obj3_1.key = 'static2' // 不可更改

// 2. 使用一个包含所有属性的临时对象字面量来明确其属性
Object.defineProperty(obj3_1, "key2", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

obj3_1.key2 = 'static2' // 不可更改

// 3. 重复利用同一对象
function withValue(value) {
  const d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value,
    });

  // 避免重复赋值
  if (d.value !== value) d.value = value;

  return d;
}
// 然后
Object.defineProperty(obj3_1, "key3", withValue("static"));

console.info('--- Object.defineProperty()2 --->', {
  obj3_1,
  descriptor,
  'obj3_1.key': obj3_1.key,
  'obj3_1.key2': obj3_1.key2,
  'obj3_1.key3': obj3_1.key3,
});

// -------------------------------- configurable 控制属性是否可以从对象中删除以及其特性（除了 value 和 writable）是否可以更改
const obj3_2 = {}
Object.defineProperty(obj3_2, "a", {
  value: 1,
  writable: true,
  configurable: false,
})
Object.defineProperty(obj3_2, "b", {
  value: 1,
  // get() {
  //   return 2
  // },
  configurable: false,
})
delete obj3_2.b; // 无法删除；严格模式下会抛出错误
obj3_2.a = 2
obj3_2.b = 2 // 无效
console.info('--- Object.defineProperty()3 --->', {
  a: obj3_2.a,
  b: obj3_2.b,
});
// Object.defineProperty(obj3_2, "b", {
//   configurable: true,
// }) // 抛出 TypeError: Cannot redefine property: b
// Object.defineProperty(obj3_2, "b", {
//   enumerable: true,
// }); // 抛出 TypeError: Cannot redefine property: b
// Object.defineProperty(obj3_2, "b", {
//   set() {},
// }); // 抛出 TypeError（set 在之前未定义）
// Object.defineProperty(obj3_2, "b", {
//   get() {
//     return 1;
//   },
// }); // 抛出 TypeError
// Object.defineProperty(obj3_2, "b", {
//   writable: true,
// }); // 抛出 TypeError
// Object.defineProperty(obj3_2, "b", {
//   value: 12,
// }); // 抛出 TypeError
Object.defineProperty(obj3_2, "a", {
  writable: false,
});
// Object.defineProperty(obj3_2, "a", {
//   value: 3,
// }); // TypeError
obj3_2.a = 4 // 无效
console.info('--- Object.defineProperty()4 --->', {
  a: obj3_2.a,
  b: obj3_2.b,
});
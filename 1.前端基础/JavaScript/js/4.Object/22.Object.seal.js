// ### 3.22 Object.seal()
let obj = { a: 1, b: 2, c: 3, d: 4 }

let obj1 = Object.seal(obj)

// 可以修改属性
obj.c = 33; // 有效
obj1.b = 22; // 有效

// 无法删除和添加
delete obj1.a; // 无效
obj1.e = 5; // 无效

// 不能将数据属性转换成访问者属性，反之亦然。
// Object.defineProperty(obj, "a", {
//   get() {
//     return 11;
//   },
// }); // 抛出 TypeError

// 添加属性也会抛出错误
// Object.defineProperty(obj, "a", {
//   value: 11,
// }); // 抛出 TypeError

// 且严格模式下，这种尝试将会抛出 TypeError。
// function fail() {
//   "use strict";
//   delete obj.foo; // 抛出一个 TypeError
//   obj.sparky = "arf"; // 抛出一个 TypeError
// }
// fail();

console.log({
  obj,
  obj1,
  "obj === obj1": obj === obj1,
  isSeal: Object.isSealed(obj)
});
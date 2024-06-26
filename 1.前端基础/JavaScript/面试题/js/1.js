// 如何让 var [a, b] = {a: 1, b: 2} 解构赋值成功？

Object.prototype[Symbol.iterator] = function () {
  // 使用 Object.values(this) 方法获取对象的所有值，并返回这些值的迭代器对象
  return Object.values(this)[Symbol.iterator]();
};

var [a, b] = { a: 1, b: 2 };
console.info('--- info --->', a, b);

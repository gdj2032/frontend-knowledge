// ### 3.16 Object.preventExtensions()
obj = {
  property: 11
};

Object.preventExtensions(obj);

try {
  Object.defineProperty(obj, 'property', {
    value: 42,
  }); // success

  Object.defineProperty(obj, 'property1', {
    value: 42,
  }); // error
} catch (e) {
  console.log(e);
  // Expected output: TypeError: Cannot define property property1, obj is not extensible
}

const isExt = Reflect.preventExtensions(obj)
console.log(isExt);

// Object.preventExtensions 将原对象变的不可扩展，并且返回原对象。
obj = {}
const obj2 = Object.preventExtensions(obj);

// 字面量方式定义的对象默认是可扩展的。
const empty1 = {};
const empty2 = {};

// 可以将其改变为不可扩展的。
Object.preventExtensions(empty2);

// 不可扩展对象的原型是不可变的：

const fixed = Object.preventExtensions({});
// 抛出 TypeError
// fixed.__proto__ = { oh: "hai" };

// 非对象参数
// Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 code)

const preventExtensions_1 = Object.preventExtensions(1);
// 1                             (ES2015 code)

console.log({
  "obj === obj2": obj === obj2, // true
  "empty1_isExtensible": Object.isExtensible(empty1), // true
  "empty2_isExtensible": Object.isExtensible(empty2), // false
  preventExtensions_1,
});

// ### 3.9 Object.getOwnPropertyDescriptors()
const obj1 = {
  property1: 42,
};

const d1 = Object.getOwnPropertyDescriptors(obj1);
console.log(d1);
// { property1: { value: 42, writable: true, enumerable: true, configurable: true } }

const d2 = Object.getOwnPropertyDescriptors("foo", 0);
console.log(d2);

// {
//   '0': {
//     value: 'f',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   '1': {
//     value: 'o',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   '2': {
//     value: 'o',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   length: { value: 3, writable: false, enumerable: false, configurable: false }
// }

// 1. 浅拷贝一个对象

const obj2 = {
  a: 1,
  b: 2,
}

const obj3 = Object.create(
  Object.getPrototypeOf(obj2),
  Object.getOwnPropertyDescriptors(obj2),
);

console.log({ obj2, obj3 }, obj2 === obj3);

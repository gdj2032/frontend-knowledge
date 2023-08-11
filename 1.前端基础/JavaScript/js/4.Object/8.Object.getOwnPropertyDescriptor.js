// ### 3.8 Object.getOwnPropertyDescriptor()
const obj1 = {
  property1: 42,
};
let d1 = Object.getOwnPropertyDescriptor(obj1, 'property1');
console.log(d1);
// { value: 42, writable: true, enumerable: true, configurable: true }

d1 = Object.getOwnPropertyDescriptor("foo", 0);
console.log(d1);
// { value: 'f', writable: false, enumerable: true, configurable: false }

d1 = Object.getOwnPropertyDescriptor(123, 0);
console.log(d1);
// undefined

d1 = Object.getOwnPropertyDescriptor(true, 0);
console.log(d1);
// undefined

// d1 = Object.getOwnPropertyDescriptor(undefined, 0);
// console.log(d1);
// // TypeError: Cannot convert undefined or null to object

// d1 = Object.getOwnPropertyDescriptor(null, 0);
// console.log(d1);
// // TypeError: Cannot convert undefined or null to object


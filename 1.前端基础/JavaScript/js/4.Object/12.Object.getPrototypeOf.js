// ### 3.12 Object.getPrototypeOf()
let proto = {};
let obj = Object.create(proto);
let same = Object.getPrototypeOf(obj) === proto; // true
console.log(same);

obj = Object.getPrototypeOf('123');
console.log(obj);
// [String: '']

obj = Object.getPrototypeOf(123);
console.log(obj);
// [[Number: 0]

// number or string: TypeError: "foo" is not an object (ES5 code)

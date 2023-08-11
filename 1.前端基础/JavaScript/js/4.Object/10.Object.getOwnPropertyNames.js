// ### 3.10 Object.getOwnPropertyNames()
let obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol('1')]: 4,
  [BigInt(123)]: 5,
}

let names = Object.getOwnPropertyNames(obj)
console.log(obj, names);

obj = Object.create({}, {
  getFoo: {
    value() {
      return this.foo;
    },
    enumerable: false,
  },
});

obj.foo = 123

names = Object.getOwnPropertyNames(obj)
console.log(obj, names);
// { '123': 5, a: 1, b: 2, c: 3, [Symbol(1)]: 4 } [ '123', 'a', 'b', 'c' ]

names = Object.getOwnPropertyNames('123123')
console.log(names);
// TypeError: "foo" is not an object (ES5 code)
// [ '0', '1', '2', '3', '4', '5', 'length' ] >= es6

// 不可枚举属性
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
      enumerable: false,
    },
  },
);
myObj.foo = 1;

console.log(Object.getOwnPropertyNames(myObj).sort());
// ["foo", "getFoo"]
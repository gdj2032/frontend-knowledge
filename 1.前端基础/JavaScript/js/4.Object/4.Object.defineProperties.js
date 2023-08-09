// ### 3.4 Object.defineProperties()
const obj1 = {};

Object.defineProperties(obj1, {
  a: {
    value: 42,
    writable: true,
  },
  b: {},
});

console.log(obj1.a, obj1.b);
// Expected output: 42 undefined

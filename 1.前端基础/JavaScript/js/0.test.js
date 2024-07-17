const obj = Object.defineProperties(
  {},
  {
    a: {
      writable: false,
      enumerable: false,
      configurable: false,
      value: 1
    },
    b: {},
    c: {
      value: 3,
      configurable: true
    }
  }
);

const demo = Object.getOwnPropertyDescriptor(obj, 'c');

demo.value = 333;

console.info('--- demo --->', demo, Object.getOwnPropertyDescriptors(obj));

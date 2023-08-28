// # 1. Array.prototype.at()
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function at(n) {
  // ToInteger() abstract op
  n = Math.trunc(n) || 0;
  // Allow negative indexing from the end
  if (n < 0) n += this.length;
  // OOB access is guaranteed to return undefined
  if (n < 0 || n >= this.length) return undefined;
  // Otherwise, this is just normal property access
  return this[n];
}

const TypedArray = Reflect.getPrototypeOf(Int8Array);
for (const C of [Array, String, TypedArray]) {
  Object.defineProperty(C.prototype, "at",
    {
      value: at,
      writable: true,
      enumerable: false,
      configurable: true
    });
}

// 在非数组对象上调用 at()
const arrayLike = {
  length: 4,
  0: "a",
  1: "b",
  a: 'aaa',
  b: 'bbb',
};

console.info('--- at --->', {
  'arr.at(1)': arr.at(1),
  'arr.at(-1)': arr.at(-1),
  'arrayLike(-1)': Array.prototype.at.call(arrayLike, -1),
  'arr.at("1")': arr.at('1'),
  'arr.at("-1")': arr.at('-1'),
  'arr.at("a")': arr.at('a'),
  'arr.at("b")': arr.at('b'),
  'arrayLike.at("a")': Array.prototype.at.call(arrayLike, 'a'),
});
// {
//   'arr.at(1)': 2,
//   'arr.at(-1)': 12,
//   'arrayLike(-1)': 'b',
//   'arr.at("1")': 2,
//   'arr.at("-1")': 12,
//   'arr.at("a")': 1,
//   'arr.at("b")': 1
// }
// ### 3.7 Object.fromEntries() 将键值对列表转换为一个对象
const map1 = new Map([
  ['foo', 'bar'],
  [1, 2],
]);
const obj1 = Object.fromEntries(map1)

const arr2 = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj2 = Object.fromEntries(arr2);

const obj3 = { a: 1, b: 2, c: 3 };

const obj4 = Object.fromEntries(
  Object.entries(obj3).map(([key, val]) => [key, val * 2]),
);

const obj5 = Object.fromEntries('');

console.log({ obj1, obj2, obj3, obj4, obj5 });

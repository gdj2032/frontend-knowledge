// # 2. Array.prototype.concat()
const a = [1, 2, 3]
const b = ['a', 'b', 'c']
const c = [[1]]

const arr1 = a.concat(b)
const arr2 = a.concat(b, c)
const arr3 = a.concat(b, c)
arr3[6].push(2)

// 使用 Symbol.isConcatSpreadable 合并类数组对象
// concat 默认情况下不会将类数组对象视作数组
// 仅在 Symbol.isConcatSpreadable 被设置为真值（例如，true）时才会将类数组对象视作数组。
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
const arr4 = [0].concat(obj1, obj2);

console.info('--- concat --->', {
  arr1,
  arr2,
  arr3,
  arr4,
});
// {
//   arr1: [ 1, 2, 3, 'a', 'b', 'c' ],
//   arr2: [ 1, 2, 3, 'a', 'b', 'c', [ 1, 2 ] ],
//   arr3: [ 1, 2, 3, 'a', 'b', 'c', [ 1, 2 ] ],
//   arr4: [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
// }

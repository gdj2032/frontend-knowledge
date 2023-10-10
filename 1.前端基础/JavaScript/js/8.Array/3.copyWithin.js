// ### 3. Array.prototype.copyWithin()
const a = {
  arr: [1, 2, 3, 4, 5]
}

const arr1 = JSON.parse(JSON.stringify(a.arr)).copyWithin(0, 3, 4)
const arr2 = JSON.parse(JSON.stringify(a.arr)).copyWithin(1, 3)
const arr3 = JSON.parse(JSON.stringify(a.arr)).copyWithin(2, 4)
const arr4 = JSON.parse(JSON.stringify(a.arr)).copyWithin(3, 5)

// 稀疏数组调用 copyWithin()
const arr5 = [1, , 3].copyWithin(2, 1, 2)

// 在非数组对象上调用 copyWithin()
const arrayLike = {
  length: 5,
  3: 1,
};
const arr6 = Array.prototype.copyWithin.call(arrayLike, 0, 3)
const arr7 = Array.prototype.copyWithin.call(arrayLike, 3, 1);

console.info({ a, arr1, arr2, arr3, arr4, arr5, arr6, arr7 });
// {
//   a: { arr: [ 1, 2, 3, 4, 5 ] },
//   arr1: [ 4, 2, 3, 4, 5 ],
//   arr2: [ 1, 4, 5, 4, 5 ],
//   arr3: [ 1, 2, 5, 4, 5 ],
//   arr4: [ 1, 2, 3, 4, 5 ],
//   arr5: [ 1, <2 empty items> ],
//   arr6: { '0': 1, length: 5 },
//   arr7: { '0': 1, length: 5 }
// }

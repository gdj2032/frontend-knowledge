const arr1 = [1, 2, 3]

const res1 = arr1.flatMap(e => e === 2 ? [2, 2] : e)

console.log(res1);
// [ 1, 2, 2, 3 ]

// res1等价于
const res1_1 = arr1.map(e => e === 2 ? [2, 2] : e).flat()
console.log(res1_1);

// 预分配数组并显式迭代
const arr2 = [1, 2, 3, 4];

const res2 = arr2.flatMap((x) => [x, x * 2]);
// 等价于
const n = arr2.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i++) {
  const x = arr2[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]
console.log({ res2, acc });

// 在稀疏数组上使用 flatMap()
// callbackFn 不会被源数组中的空槽调用，因为 map() 不会调用，而 flat() 将忽略返回数组中的空槽。
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]

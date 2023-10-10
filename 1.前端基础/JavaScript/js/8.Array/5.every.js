const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const ev1 = a.every(e => e < 5)
const ev2 = a.every(e => e < 15)

// 检查一个数组是否是另一个数组的子集
const isSubset = (a1, a2) => a2.every((e) => a1.includes(e));

// 在稀疏数组上使用 every()
// every() 不会在空槽上运行它的断言函数。
const xs1 = [1, , 3].every(e => e !== undefined);
const xs2 = [2, , 2].every(e => e === 2);

// 在非数组对象上调用 every()
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};

console.log({
  ev1,
  ev2,
  isSubset1: isSubset(a, [1, 2, 3]),
  isSubset2: isSubset(a, [1, 2, 3, -1]),
  xs1,
  xs2,
  'Array.prototype.every.call': Array.prototype.every.call(arrayLike, (x) => typeof x === "string")
});

// 影响初始数组（修改、添加和删除）
let arr = [1, 2, 3, 4, 5]
arr.every((e, i, arr) => {
  arr[i + 1]--
  console.log(`[${arr}][${i}] -> ${e}`);
  return e < 2
})

arr = [1, 2, 3];
arr.every((e, i, arr) => {
  arr.push('x');
  console.log(`[${arr}][${i}] -> ${e}`);
  return e < 4;
});

arr = [1, 2, 3, 4];
arr.every((e, i, arr) => {
  arr.pop();
  console.log(`[${arr}][${i}] -> ${e}`);
  return e < 4;
});

// [1,1,3,4,5][0] -> 1
// [1,1,2,4,5][1] -> 1
// [1,1,2,3,5][2] -> 2

// [1,2,3,x][0] -> 1
// [1,2,3,x,x][1] -> 2
// [1,2,3,x,x,x][2] -> 3

// [1,2,3][0] -> 1
// [1,2][1] -> 2

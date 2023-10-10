const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

// 一个简单的对象，被数组的每个空槽所引用
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
console.log(arr);

// 使用 fill() 创建全 1 矩阵
const arr1 = new Array(3);
for (let i = 0; i < arr1.length; i++) {
  arr1[i] = new Array(4).fill(1); // 创建一个大小为 4 的数组，填充全 1
}
console.log(arr1);

// 使用 fill() 填充空数组
const arr2 = Array(5).fill("1", 0);
console.log(arr2);

// 在非数组对象上调用 fill()
const arrayLike = { length: 2 };
console.log(Array.prototype.fill.call(arrayLike, 1));
// { '0': 1, '1': 1, length: 2 }

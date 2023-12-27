const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// 运算后的 myFish 是 ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed 是 []，没有元素被删除

const myFish2 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed2 = myFish2.splice(3, 1);

// 运算后的 myFish2 是 ["angel", "clown", "drum", "sturgeon"]
// removed2 是 ["mandarin"]

// 非数组使用
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.splice.call(arrayLike, 0, 1, 2, 3));
// [ 5 ]
console.log(arrayLike);
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }

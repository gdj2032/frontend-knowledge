const a1 = ["a", "b", "c"];

const a1Entries = a1.entries();

console.info('--- a1Entries 1 --->', a1Entries.next().value);
console.info('--- a1Entries 2 --->', a1Entries.next().value);
console.info('--- a1Entries 3 --->', a1Entries.next().value);

// --- iterator1 1 ---> [ 0, 'a' ]
// --- iterator1 2 ---> [ 1, 'b' ]
// --- iterator1 2 ---> [ 2, 'c' ]

// 迭代索引和元素
for (const [index, element] of a1.entries()) {
  console.log(index, element);
}

// 0 a
// 1 b
// 2 c

const a2Entries = a1.entries();

// for...of循环
for (const element of a2Entries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']

// 迭代稀疏数组

for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']

// 在非数组对象上调用 entries()

const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]



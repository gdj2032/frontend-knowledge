const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const a1 = a.reduce((a, b) => a + b)

const getMax = (a, b) => Math.max(a, b);

const b1 = [1, 100].reduce(getMax, 50)
const b2 = [50].reduce(getMax, 10)
const b3 = [1, 100].reduce(getMax)
const b4 = [50].reduce(getMax)
const b5 = [].reduce(getMax, 1)
// const b6 = [].reduce(getMax) // TypeError

// 展平嵌套数组
const c = [
  [0, 1],
  [2, 3],
  [4, 5],
]
const c1 = c.reduce((a, b) => a.concat(b))

// 统计对象中值的出现次数
const d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 1]
const d1 = d.reduce((a, b) => {
  const count = a[b] || 0;
  return {
    ...a,
    [b]: count + 1,
  }
}, {})

// 按属性对对象进行分组
const e = [
  { name: 'qqq', age: 11 },
  { name: 'www', age: 11 },
  { name: 'eee', age: 13 },
]

const groupBy = (arr, key) => {
  return arr.reduce((a, b) => {
    const k = b[key]
    const cur = a[k] || []
    return {
      ...a,
      [k]: [...cur, b]
    }
  }, {})
}

const e1 = groupBy(e, 'age')

// 数组去重
const f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 1]

const f1 = f.reduce((a, b) => {
  if (!a.includes(b)) {
    a.push(b)
  }
  return a;
}, [])

// 使用 reduce() 来替代 .filter().map()
const g = [-2, 1, 3, 8, 0];

const g1 = g.reduce((a, b) => b > 0 ? [...a, b * 2] : a, [])

// 按顺序运行 Promise
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input),
  );
}
const p1 = (a) => new Promise((res) => res(a * 2))
const p2 = (a) => new Promise((res) => res(a * 3))
const p3 = (a) => a * 4
const p4 = (a) => new Promise((res) => res(a * 5))

runPromiseInSequence([p1, p2, p3, p4], 10).then(console.info)

// 使用函数组合实现管道
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

const pipe =
  (...functions) =>
    (initialValue) =>
      functions.reduce((acc, fn) => fn(acc), initialValue);

const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240

// 在稀疏数组中使用 reduce()
// reduce() 会跳过稀疏数组中缺失的元素，但不会跳过 undefined 值。
const l1 = [1, 2, , 4].reduce((a, b) => a + b)
const l2 = [1, 2, undefined, 4].reduce((a, b) => a + b)

console.log('data: ', { a1, b1, b2, b3, b4, b5, c1, d1, e1, f1, g1, l1, l2 });

// 在非数组对象上调用 reduce()
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log('在非数组对象上调用 reduce(): ', Array.prototype.reduce.call(arrayLike, (x, y) => x + y));

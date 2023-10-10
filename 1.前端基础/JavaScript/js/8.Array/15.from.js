const a = [1, 2, 3, 4, 5, 6, 7, 8];
const b = 'qwerty'
const c = new Set([1, 2, 3, 4, 5, 1, 2])
const d = new Map([[1, 2], [2, 4], [4, 8]])
const e = new Map([['1', 'a'], ['2', 'b'], ['3', 'c']])

const a1 = Array.from(a, e => e * 2)
const a2 = a.map(e => e * 2)

// 从字符串构建数组
const b1 = Array.from(b)

// 从 Set 构建数组
const c1 = Array.from(c)

// 从 Map 构建数组
const d1 = Array.from(d)
const e1 = Array.from(e.values())
const e2 = Array.from(e.keys())

// 从类数组对象构建数组（arguments）
function f() {
  return Array.from(arguments);
}
const f1 = f(1, 2, 3);

// 生成一个数字序列。因为数组在每个位置都使用 `undefined` 初始化，下面的 `v` 值将是 `undefined`
const g1 = Array.from({ length: 5 }, (v, i) => i);

// 序列生成器（range）
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const h1 = range(0, 4, 1)
const h2 = range(0, 10, 2)

// 使用 Array.from 生成字母表，并将其序列排序
const h3 = range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x),
);

console.table({ a1, a2, b1, c1, d1, e1, e2, f1, g1, h1, h2, h3 });

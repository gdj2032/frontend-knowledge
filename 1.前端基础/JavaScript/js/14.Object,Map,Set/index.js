// Map
const map = new Map();
map.set(1, 2);
map.set('1', 222);
map.set({ a: 1 }, { b: 2 });
map.has(1);
map.get(1);
// map.delete(1);
// map.clear()
console.info('--- info --->', map);

// Set
const set = new Set([1, 2, 3, 4, 4]);
[...set];
// [1, 2, 3, 4]
set.has(5);
set.add(5);
set.delete(1);
// set.clear()
console.info('--- set --->', set);

// 3.1 Set > 数组
const set1 = new Set([1, 2, 3, 4, 5]);
const arr1 = Array.from(set1);
console.info('--- arr1 --->', arr1);

// 3.2 数组 > Set
const arr2 = [1, 2, 3, 4, 5];
const set2 = new Set(arr2);
console.info('--- set2 --->', set2);

// 3.3 map > 数组
const keys = [...map.keys()];
const values = [...map.values()];
const entries = [...map.entries()];
const map2 = [...map];

console.info('--- info --->', { keys, values, entries, map2 });

// 3.4 数组 > Map
const arr4 = [
  [1, 2],
  [2, 3],
  [3, 4]
];
const arr2map = new Map(arr4);
console.info('--- info --->', arr2map);

// 3.5 Map > 对象
// 自定义
function map2Obj(m) {
  const obj5 = {};
  for (const [k, v] of m) {
    obj5[k] = v;
  }
  return obj5;
}
const obj5_1 = map2Obj(arr2map);

// 键值对转为对象
const map5_1 = Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
]);
// map转为对象
const map5_2 = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);
const obj5_2 = Object.fromEntries(map5_2);
console.info('--- obj5_2 --->', { obj5_1, map5_1, obj5_2 });

// 3.6 对象 > 数组

const obj6 = { a: 1, b: 2 };
const map6 = new Map(Object.entries(obj6));
console.info('--- map6 --->', map6);

// 3.7 将查询字符串转为对象

const obj7 = Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'));
console.info('--- obj7 --->', obj7);

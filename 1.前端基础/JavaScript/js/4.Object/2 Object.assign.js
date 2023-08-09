// ### 3.2 Object.assign() 复制修改对象
const obj2_1 = { a: 1, b: 2, c: 3 }
const obj2_2 = { b: 11, c: 12, d: 13 }
const assignObj = Object.assign(obj2_1, obj2_2)
// {
//   obj2_1: { a: 1, b: 11, c: 12, d: 13 },
//   obj2_2: { b: 11, c: 12, d: 13 },
//   assignObj: { a: 1, b: 11, c: 12, d: 13 }
// }
console.info('--- Object.assign() --->', { obj2_1, obj2_2, assignObj })

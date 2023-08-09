// ### 3.5 Object.entries() 返回给定对象自身可枚举属性的 [key, value] 数组
// #### 3.5.1 基本使用
const obj1 = { foo: 'bar', bar1: 'foo1' }
const arr1 = Object.entries(obj1)

// 类数组对象
const obj2 = { a: 1, b: 2, c: 3, d: 4, e: 5 }
const arr2 = Object.entries(obj1)

// 具有随机键排序的类数组对象
const obj3 = { 100: "a", 2: "b", 7: "c" }
const arr3 = Object.entries(obj3)

const objFc = Object.create({}, {
  getFoo: {
    value() {
      return this.foo
    }
  }
})

objFc.foo = 'objFc-bar'
const arr4 = Object.entries(objFc)

console.info('--- Object.entries 1 --->', { arr1, arr2, arr3, arr4 });
// {
//   arr1: [ [ 'foo', 'bar' ], [ 'bar1', 'foo1' ] ],
//   arr2: [ [ 'foo', 'bar' ], [ 'bar1', 'foo1' ] ],
//   arr3: [ [ '2', 'b' ], [ '7', 'c' ], [ '100', 'a' ] ],
//   arr4: [ [ 'foo', 'objFc-bar' ] ]
// }

// #### 3.5.2 在基本类型中使用
// 字符串具有索引作为可枚举的自有属性
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// 其他基本类型没有自有属性
console.log(Object.entries(100)); // []

// #### 3.5.3 将 Object 转换成 Map
const obj5 = { foo: "bar", baz: 42 };
const map5 = new Map(Object.entries(obj5));
console.log(map5); // Map(2) {"foo" => "bar", "baz" => 42}

// #### 3.5.4 遍历对象

// 使用 for...of 循环
const obj6 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj6)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// 使用数组方法
Object.entries(obj6).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});

// # 5.原型链

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.country = 'zg'
Person.prototype.hairColor = 'black';
Person.prototype.eat = () => {
  return '大米饭'
};

let per0 = new Person('小明', 18)

// **准则1：原型对象（即Person.prototype）的constructor指向构造函数本身**
// **准则2：实例（即per0）的__proto__和原型对象指向同一个地方**
console.log({
  per0,
  country: per0.country,
  'Person.prototype.constructor == Person': Person.prototype.constructor == Person,
  'per0.__proto__ == Person.prototype': per0.__proto__ == Person.prototype
});
// {
//   per0: Person { name: '小明', age: 18 },
//   country: 'zg',
//   'Person.prototype.constructor == Person': true,
//   'per0.__proto__ == Person.prototype': true
// }

// ----------------------------------------------------------------

function Foo(a, b) {
  this.a = a;
  this.b = b;
}

Foo.prototype.c = 'c';
Foo.prototype.d = 'd';
Foo.prototype.fn = () => 'fn';

const foo1 = new Foo()
const foo2 = new Foo()

// 准则2
console.log({
  'foo1.__proto__ === Foo.prototype': foo1.__proto__ === Foo.prototype,
  'foo2.__proto__ === Foo.prototype': foo2.__proto__ === Foo.prototype,
  'foo1.__proto__ === foo2.__proto__': foo1.__proto__ === foo2.__proto__,
  // 准则2 (Foo.prototype本质也是普通对象，可适用准则2)
  'Foo.prototype.__proto__ === Object.prototype': Foo.prototype.__proto__ === Object.prototype,
  'Foo.__proto__ === Function.prototype': Foo.__proto__ === Function.prototype,
  // 准则2 (Function.prototype本质也是普通对象，可适用准则2)
  'Object.prototype.__proto__ === Function.prototype': Function.prototype.__proto__ === Object.prototype,
  'Object.__proto__ === Function.prototype': Object.__proto__ === Function.prototype,
  'Function.__proto__ = Function.prototype': Function.__proto__ === Function.prototype,

});

// 准则1
console.log({
  'Foo.prototype.constructor === Foo': Foo.prototype.constructor === Foo,
  'Function.prototype.constructor = Function': Function.prototype.constructor === Function,
  'Object.prototype.constructor = Object': Object.prototype.constructor === Object,
});


this.a = 1;

let obj1 = {
  name: "Mary",
  age: 13,
  say1: () => {
    return this; //返回的是window
  },
  say2: function () {
    return this; // obj
  },
  say3: function () {
    return {
      name: "Jerry",
      age: 2,
      say3_1: () => {
        return this;
      },
      say3_2: function () {
        return this;
      },
    };
  }
};

console.log('------ 1: ', obj1.say1());
console.log('------ 2: ', obj1.say2());
console.log('------ 3: ', obj1.say3());
console.log('------ 4: ', obj1.say3().say3_1());
console.log('------ 5: ', obj1.say3().say3_2());

// ## 箭头函数
// 1. 箭头函数的 this 是父级作用域的 this
const a = {
  a: 1,
  obj: () => {
    console.log('a this => ', this);
  }
}
const b = {
  b: 1,
  obj: function () {
    console.log('b this => ', this);
  }
}

a.obj() // window
b.obj() // { b: 1, obj: [Function: obj] }

// 2. call、apply、bind无法改变箭头函数的 this

const obj = { name: '111' }
const getName1 = () => {
  console.log(this.name);
}
function getName2() {
  console.log(this.name);
}
getName1.call(obj) // undefined
getName2.call(obj) // 111

// 3. 不可以作为构造函数
const Person1 = () => {
  this.name = 'ggg1'
}
// new Person1() // TypeError: Person is not a constructor
function Person2() {
  this.name = 'ggg2'
}
const per = new Person2()
console.log(per.name);

// 4. 不可以使用 arguments

const func1 = () => {
  console.log('func1 arguments', arguments);
}
function func2() {
  console.log('func2 arguments', arguments);
}
function func3(...args) {
  console.log('func3 args', args);
}
func1(1, 2, 3) // undefined
func2(1, 2, 3) // [Arguments] { '0': 1, '1': 2, '2': 3 }
func3(1, 2, 3) // [ 1, 2, 3 ]

// 5. 箭头函数不支持 new.target

const Cat1 = () => {
  console.log('cat1 new.target', new.target);
}

function Cat2() {
  console.log('cat2 new.target', new.target);
}

// new Cat1() // 浏览器环境 Uncaught SyntaxError: new.target expression is not allowed here
new Cat2() // new.target [Function: Cat2]

// 6. 箭头函数没有原型对象
const Dog1 = () => { }
function Dog2() { }
const dog2 = new Dog2();
console.log('--- Dog2 --->', {
  // 'Dog1.prototype.constructor == Dog1': Dog1.prototype.constructor == Dog1,
  // Cannot read property 'constructor' of undefined
  'Dog2.prototype.constructor == Dog2': Dog2.prototype.constructor == Dog2, // true
  'dog2.__proto__ == Dog2.prototype': dog2.__proto__ == Dog2.prototype, // true
});


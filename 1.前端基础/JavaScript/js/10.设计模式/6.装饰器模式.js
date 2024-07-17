// ### 3.6 装饰器模式 Decorator Pattern

// ------------------- es7 中的 decorator ---------------------

/**
 * 类成员装饰器
 * @param {*} target 被修饰的类的原型对象
 * @param {*} name 类成员的名字
 * @param {*} descriptor 类成员的描述对象
 * @returns
 */
function readonly1(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

/**
 * 类属性装饰器
 * @param {*} attribute
 * @returns
 */
function readonly2(attribute) {
  return (target, name, descriptor) => {
    descriptor.writable = false;
    return descriptor;
  };
}

class Person {
  constructor(name) {
    this.name = name;
  }

  @readonly1
  getName1() {
    return this.name;
  }

  @readonly2('age')
  age = 11;

  @debounce(500)
  test(index) {
    console.info('--- test --->', index);
  }
}

const p = new Person('ggg');
console.info('--- getName --->', p.getName1());

// p.getName1 = () => {
//   return 1;
// }; // Cannot assign to read only property 'getName' of object '#<Person>'

p.age = 12; // Cannot assign to read only property 'sex' of object '#<Person>'

p.test(1);
setTimeout(() => {
  p.test(2);
}, 400);
setTimeout(() => {
  p.test(3);
}, 600);
// 只输出了 3

// -------------------- @debounce实现函数防抖 --------------------

function debounce(timeout) {
  const instanceMap = new Map(); // 创建一个Map的数据结构，将实例化对象作为key

  return function (target, key, descriptor) {
    return Object.assign({}, descriptor, {
      value: function value() {
        // 清除延时器
        clearTimeout(instanceMap.get(this));
        // 设置延时器
        instanceMap.set(
          this,
          setTimeout(() => {
            // 调用该方法
            descriptor.value.apply(this, arguments);
            // 将延时器设置为 null
            instanceMap.set(this, null);
          }, timeout)
        );
      }
    });
  };
}

// --------------------  --------------------

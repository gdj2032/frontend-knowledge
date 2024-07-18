// ### 3.6 装饰器模式 Decorator Pattern

/**
 * @param {*} target 被修饰的类的原型对象
 * @param {*} name 类成员的名字
 * @param {*} descriptor 类成员的描述对象
 */

/**
 * 类装饰器
 * @param path
 * @returns
 */
function Path(path: string) {
  return function (target: Function) {
    !target.prototype.$Meta && (target.prototype.$Meta = {});
    target.prototype.$Meta.baseUrl = path;
  };
}

/**
 * 类成员装饰器
 * @param {*} target 被修饰的类的原型对象
 * @param {*} name 类成员的名字
 * @param {*} descriptor 类成员的描述对象
 * @returns
 */
function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

/**
 * 方法装饰器
 * @param url
 * @returns
 */
function GET(url: string) {
  return function (target, methodName: string, descriptor: PropertyDescriptor) {
    !target.$Meta && (target.$Meta = {});
    target.$Meta[methodName] = url;
  };
}

/**
 * 方法参数装饰器
 * @param paramName
 * @returns
 */
function PathParam(paramName: string) {
  return function (target, methodName: string, paramIndex: number) {
    !target.$Meta && (target.$Meta = {});
    target.$Meta[paramIndex] = paramName;
  };
}

/**
 * 属性装饰器
 * @param value
 * @returns
 */
function DefaultValue(value: string) {
  return function (target: any, propertyName: string) {
    target[propertyName] = value;
  };
}

@Path('/person')
class Person {
  name: string;
  @DefaultValue('12')
  age: string;
  $Meta: any;

  constructor(name) {
    this.name = name;
  }

  @readonly
  getName() {
    return this.name;
  }

  @GET('/users')
  users(@PathParam('userId') userId: string) {
    return 'users > userId: ' + userId;
  }

  @debounce(500)
  test(index) {
    console.info('--- test --->', index);
  }
}

const p = new Person('ggg');

// p.getName = () => {
//   return 1;
// }; // Cannot assign to read only property 'getName' of object '#<Person>'

console.info('--- info --->', {
  'Person.prototype.$Meta': Person.prototype.$Meta,
  'p.$Meta': p.$Meta,
  'p.age': p.age,
  'p.getName()': p.getName(),
  'p.users': p.users('111')
});

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
        const args = arguments;
        // 清除延时器
        clearTimeout(instanceMap.get(this));
        // 设置延时器
        instanceMap.set(
          this,
          setTimeout(() => {
            // 调用该方法
            descriptor.value.apply(this, args);
            // 将延时器设置为 null
            instanceMap.set(this, null);
          }, timeout)
        );
      }
    });
  };
}

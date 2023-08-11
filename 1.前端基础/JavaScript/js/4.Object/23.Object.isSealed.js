// ### 3.23 Object.isSealed()
// 新建的对象默认不是密封的。
const empty = {};
Object.isSealed(empty); // false

// 如果你令一个空对象不可扩展，则它同时也会变成个密封对象。
Object.preventExtensions(empty);
Object.isSealed(empty); // true

// 但如果这个对象不是空对象，则它不会变成密封对象，因为密封对象的所有自身属性必须是不可配置的。
const hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // false

// 如果把这个属性变的不可配置，则这个属性也就成了密封对象。
Object.defineProperty(hasProp, "fee", {
  configurable: false,
});
Object.isSealed(hasProp); // true

// 密封一个对象最简单的方法当然是 Object.seal。
const sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // true

// 根据定义，密封对象是不可扩展的。
Object.isExtensible(sealed); // false

// 一个密封对象可能被冻结，但不一定。
Object.isFrozen(sealed); // true
//（所有属性也是不可写的）

const s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // false
//（'p' 仍然可写）

const s3 = Object.seal({
  get p() {
    return 0;
  },
});
Object.isFrozen(s3); // true
//（对于访问器属性，只有可配置性才有影响）

// 非对象参数
Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)

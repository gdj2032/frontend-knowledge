// ### 3.18 Object.isFrozen()
// 一个新对象是默认是可扩展的，所以它也是非冻结的。
Object.isFrozen({}); // false

// 一个不可扩展的空对象同时也是一个冻结对象。
const vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen); // true

// 一个非空对象默认也是非冻结的。
const oneProp = { p: 42 };
Object.isFrozen(oneProp); // false

// 即使令对象不可扩展，它也不会被冻结，因为属性仍然是可配置的（而且可写的）。
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp); // false

// 此时，如果删除了这个属性，则它会成为一个冻结对象。
delete oneProp.p;
Object.isFrozen(oneProp); // true

// 一个不可扩展的对象，拥有一个不可写但可配置的属性，则它仍然是非冻结的。
const nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", {
  writable: false,
}); // 令其不可写
Object.isFrozen(nonWritable); // false

// 把这个属性改为不可配置，会让这个对象成为冻结对象。
Object.defineProperty(nonWritable, "e", {
  configurable: false,
}); // 令其不可配置
Object.isFrozen(nonWritable); // true

// 一个不可扩展的对象，拥有一个不可配置但可写的属性，则它也是非冻结的。
const nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", {
  configurable: false,
});
Object.isFrozen(nonConfigurable); // false

// 把这个属性改为不可写，会让这个对象成为冻结对象。
Object.defineProperty(nonConfigurable, "release", {
  writable: false,
});
Object.isFrozen(nonConfigurable); // true

// 一个不可扩展的对象，拥有一个访问器属性，则它仍然是非冻结的。
const accessor = {
  get food() {
    return "yum";
  },
};
Object.preventExtensions(accessor);
Object.isFrozen(accessor); // false

// 把这个属性改为不可配置，会让这个对象成为冻结对象。
Object.defineProperty(accessor, "food", {
  configurable: false,
});
Object.isFrozen(accessor); // true

// 使用 Object.freeze 是冻结一个对象最方便的方法。
const frozen = { 1: 81 };
Object.isFrozen(frozen); // false
Object.freeze(frozen);
Object.isFrozen(frozen); // true

// 根据定义，一个冻结对象是不可拓展的。
Object.isExtensible(frozen); // false

// 同样，根据定义，一个冻结对象也是密封对象。
Object.isSealed(frozen); // true

// 非对象参数
Object.isFrozen(1);
// TypeError: 1 is not an object（ES5 代码）

Object.isFrozen(1);
// true                         （ES2015 代码）

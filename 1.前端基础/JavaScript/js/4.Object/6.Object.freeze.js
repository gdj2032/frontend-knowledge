// 'use strict';
// ### 3.6 Object.freeze() 使一个对象被冻结
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33; // Throws an error in strict mode

console.log(obj.prop); // Expected output: 42

Object.freeze(new Uint8Array(0)); // 没有元素
// Uint8Array []

Object.freeze(new Uint8Array(1)); // 有元素
// TypeError: Cannot freeze array buffer views with elements

Object.freeze(new DataView(new ArrayBuffer(32))); // 没有元素
// DataView {}

Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)); // 没有元素
// Float64Array []

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)); // 有元素
// TypeError: Cannot freeze array buffer views with elements

// ### 3.15 Object.is()
let foo = { a: 1 }
let bar = { a: 1 }
let sameFoo = foo;

let obj = {
  0: Object.is(25, 25),
  1: Object.is(null, null),
  2: Object.is(undefined, undefined),
  3: Object.is([], []),
  4: Object.is(foo, foo),
  5: Object.is(bar, foo),
  6: Object.is(sameFoo, foo),
  7: Object.is(0, -0),
  8: Object.is(+0, -0),
  9: Object.is(-0, -0),
  10: Object.is(NaN, 0 / 0),
  11: Object.is(NaN, Number.NaN),
};

console.log(JSON.stringify(obj));
// {"0":true,"1":true,"2":true,"3":false,"4":true,"5":false,"6":true,"7":false,"8":false,"9":true,"10":true,"11":true}

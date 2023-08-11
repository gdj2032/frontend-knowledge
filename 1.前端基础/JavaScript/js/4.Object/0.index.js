const foo = { a: 1 }
const bar = { a: 1 }

const foo2 = foo;

const foo3 = Object.assign(foo)

console.log({
  "foo === bar": foo === bar,
  "foo === foo2": foo === foo2,
  "foo === foo3": foo === foo3,
});
let a = 1, b = 2;
console.log(a + ++b);

{
  let c = 3;
  var d = 4; // 变量提升
}

function test() {
  var e = 5;
}

// console.log(c); // ReferenceError: c is not defined
console.log(d);
// console.log(e); // ReferenceError: c is not defined


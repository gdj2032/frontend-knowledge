// # 6.作用域&作用域链

// ## 词法作用域

let number = 42;
function printNumber() {
  console.log(number);
}
function log() {
  let number = 54;
  printNumber();
}
// Prints 42
log();

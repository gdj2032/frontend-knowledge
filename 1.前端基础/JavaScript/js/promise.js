function test() {
  console.log(0);
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve(2)
    console.log(3);
  })
}

console.log(-1);

test().then(res => {
  console.log(res);
}).finally(() => {
  console.log(5);
})

console.log(4);

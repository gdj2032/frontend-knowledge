let bar;

setTimeout(() => {
  console.log('setTimeout');
}, 0)

setImmediate(() => {
  console.log('setImmediate');
})
function someAsyncApiCall(callback) {
  process.nextTick(callback);
}

someAsyncApiCall(() => {
  console.log('process.nextTick bar', bar);
});

new Promise((resolve, reject) => {
  console.log('promise ', bar);
  resolve(2)
}).then((r) => {
  console.log('promise r', r);
})

bar = 1;

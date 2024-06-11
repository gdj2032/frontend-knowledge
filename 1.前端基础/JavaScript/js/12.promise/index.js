// 宏任务-微任务的执行顺序

function test() {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  setImmediate(() => {
    console.log('setImmediate');
  });

  function someAsyncApiCall(callback) {
    process.nextTick(callback);
  }

  someAsyncApiCall(() => {
    console.log('process.nextTick');
  });

  function test() {
    console.log(0);
    return new Promise((resolve, reject) => {
      console.log(1);
      resolve(2);
      console.log(3);
    });
  }

  console.log(-1);

  test()
    .then(res => {
      console.log(res);
    })
    .finally(() => {
      console.log(5);
    });

  console.log(4);

  new Promise((resolve, reject) => {
    console.log(6);
    resolve(7);
    console.log(8);
  })
    .then(res => {
      console.log(res);
    })
    .finally(() => {
      console.log(9);
    });

  console.log(10);
}

test();

/**
 * 结果在最下面
 *
 *
 *
 *
 *
 *
 */

// -1
// 0
// 1
// 3
// 4
// 6
// 8
// 10
// process.nextTick
// 2
// 7
// 5
// 9
// setTimeout
// setImmediate

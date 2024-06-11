// then

// 函调函数异步执行
function test1() {
  const promise = new Promise((resolve, reject) => {
    console.log('in'); // 1
    setTimeout(() => {
      resolve('resolve'); // 3
    }, 1000);
  });

  promise.then(res => {
    console.log('res', res);
  });
  console.log('out'); // 2
  // Promise 实际是一个同步函数，then 方法才是异步
}

// 返回值
function test2() {
  const promise = new Promise(resolve => {
    resolve('resolve');
  });

  const thenPromise = promise.then(res => {
    console.log('thenPromise', res);
  });

  const catchPromise = thenPromise.catch(res => {
    console.log('catchPromise', res);
  });

  console.info('--- info1 --->', promise !== thenPromise);
  console.info('--- info2 --->', catchPromise !== thenPromise);
  console.info('--- info3 --->', promise, thenPromise, catchPromise);
}

// promise穿透
function test3() {
  const promise = new Promise(resolve => {
    resolve('resolve1');
  });

  promise.then(Promise.resolve('resolve2')).then(res => {
    console.info('--- test3 res1 --->', res);
  });

  promise.then(null).then(res => {
    console.info('--- test3 res2 --->', res);
  });

  promise
    .then(null)
    .then(Promise.resolve('resolve2'))
    .then(null)
    .then(res => {
      console.info('--- test3 res2 --->', res);
    });

  // 都是 resolve1
}

test1();
test2();
test3();

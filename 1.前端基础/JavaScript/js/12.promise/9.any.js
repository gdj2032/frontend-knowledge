// any
// Promise.any的应用场景：如果我们现在有多台服务器，则尽量使用响应速度最快的服务器，在这种情况下， 可以使用Promise.any()方法从最快的服务器接收响应。

function demo(num, time = 1000) {
  return new Promise(res => {
    setTimeout(() => {
      res(num);
    }, time);
  });
}

function demoError(num) {
  return new Promise(res => {
    throw Error('demoError~');
    res(num);
  });
}

async function test1() {
  console.time('promiseArr');
  const promises = [demo(1), demo(2, 2000), demo(3, 3000), demoError(4)];
  const values = Promise.any(promises);
  values.then(r => console.info('--- r --->', r)).catch(err => console.info('--- err --->', err));
  console.timeEnd('promiseArr');
}

async function test2() {
  console.time('promiseArr');
  const promises = [demo(2, 2000), demo(1), demo(3, 3000)];
  const values = Promise.any(promises);
  values.then(r => console.info('--- r --->', r)).catch(err => console.info('--- err --->', err));
  console.timeEnd('promiseArr');
}

test1();
test2();

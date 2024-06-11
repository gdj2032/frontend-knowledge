// all

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
  const promises = [demo(1), demo(2, 2000), demo(3, 3000)];
  const values = Promise.all(promises);
  const v = await values;
  console.info('--- info1 --->', v);
  console.timeEnd('promiseArr'); // 3004.002ms 并发执行的
}

async function test2() {
  const promises = [demo(1), demoError(), demo(2), demo(3)];
  const values = Promise.all(promises); // error
  // 如果所有的Promise中只有一个执行错误，那么整个Promise.all不会走Promise.all().then() 而是走Promise.all().catch()这个流程
  // 但是要注意的是虽然走到了Promise.all().catch()这个流程 ，但是其他 Promise 还是会正常执行，但不会返回结果
  const v = await values;
  console.info('--- info2 --->', v);
}

test1();
test2();

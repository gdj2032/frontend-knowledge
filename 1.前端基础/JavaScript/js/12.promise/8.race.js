// race
// 返回的确实最先完成Fulfilled 或者最先被Rejected的一个Promise的结果

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
  const values = Promise.race(promises);
  values.then(r => console.info('--- r --->', r)).catch(err => console.info('--- err --->', err));
  console.timeEnd('promiseArr');
}

async function test2() {
  console.time('promiseArr');
  const promises = [demo(2, 2000), demo(1), demo(3, 3000)];
  const values = Promise.race(promises);
  values.then(r => console.info('--- r --->', r)).catch(err => console.info('--- err --->', err));
  console.timeEnd('promiseArr');
}

test1();
test2();

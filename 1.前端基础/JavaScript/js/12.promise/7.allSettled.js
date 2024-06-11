// allSettled

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
  const values = Promise.allSettled(promises);
  const v = await values;
  console.info('--- info1 --->', v);
  console.timeEnd('promiseArr');
  // --- info1 ---> [
  //   { status: 'fulfilled', value: 1 },
  //   { status: 'fulfilled', value: 2 },
  //   { status: 'fulfilled', value: 3 }
  //   { status: 'rejected', reason: Error: demoError~ }
  // ]
  // promiseArr: 3010.584ms
}

test1();

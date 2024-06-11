// reject

function test1() {
  Promise.reject(new Error('error test1'));
}

function test2() {
  new Promise((_, reject) => {
    reject(new Error('error test2'));
  });
}

test1();
test2();

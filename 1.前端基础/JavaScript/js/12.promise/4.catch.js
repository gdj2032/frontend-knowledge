// catch

function test() {
  // 2个效果等同
  Promise.resolve(1)
    .then(r => console.info('--- r1 --->', r))
    .then(undefined, err => console.info('--- r1 err --->', err));

  Promise.resolve(2)
    .then(r => console.info('--- r2 --->', r))
    .catch(err => console.info('--- r2 err --->', err));
}

test();

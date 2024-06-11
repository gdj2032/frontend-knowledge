async function test() {
  const a = Promise.resolve(1);

  const b = new Promise(resolve => {
    resolve(1);
  });

  console.info('--- a === b --->', (await a) === (await b));
}

test();

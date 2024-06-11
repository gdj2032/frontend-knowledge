// finally

function test() {
  Promise.resolve(1)
    .then(r => {
      console.log(r);
      return r;
    })
    .finally(r => {
      console.info('--- finally --->', r);
    });
}

test();

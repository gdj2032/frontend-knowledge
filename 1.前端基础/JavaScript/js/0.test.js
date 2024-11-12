function Promise1(exector) {
  this.state = 'pending';
  this.value = null;
  this.callbacks = [];

  const resolve = value => {
    if (this.state !== 'pending') return;
    this.state = 'resolved';
    this.value = value;
    if (this.callbacks.length > 0) {
      setTimeout(() => {
        this.callbacks.forEach(cb => cb.onResolved(value));
      });
    }
  };

  const reject = reason => {
    if (this.state !== 'pending') return;
    this.state = 'rejected';
    this.value = reason;
    if (this.callbacks.length > 0) {
      setTimeout(() => {
        this.callbacks.forEach(cb => cb.onRejected(value));
      });
    }
  };

  try {
    exector(resolve, reject);
  } catch (error) {
    console.info('--- error --->', error);
  }
}

Promise1.prototype.then = function (onResolved, onRejected) {
  const self = this;
  onResolved = typeof onResolved === 'function' ? onResolved : v => v;
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : r => {
          throw r;
        };
  const promise = new Promise1((resolve, reject) => {
    function handle(callback) {
      try {
        const x = callback(self.value);
        if (x instanceof Promise1) {
          x.then(resolve, reject);
          resolve(x.value);
        } else {
          resolve(x);
        }
      } catch (error) {
        reject(error);
      }
    }

    if (self.state === 'pending') {
      self.callbacks.push({
        onResolved() {
          handle(onResolved);
        },
        onRejected() {
          handle(onRejected);
        }
      });
    }

    if (self.state === 'resolved') {
      setTimeout(() => {
        handle(onResolved);
      });
    }

    if (self.state === 'rejected') {
      setTimeout(() => {
        handle(onRejected);
      });
    }
  });
  return promise;
};

const p = new Promise1((res, rej) => {
  // res(1);
  rej('error');
}).then(
  v => {
    console.info('--- v --->', v);
  },
  r => {
    console.info('--- r --->', r);
  }
);

console.info('--- p --->', p);

// 手写 Promise(简单的)
function Promise1(exector) {
  this.state = 'pending'; // 状态
  this.value = undefined; // 值
  this.callbacks = []; // 元素结构 { onResolved() {}, onRejected() {} }

  const resolve = value => {
    // 状态只能改变一次
    if (this.state !== 'pending') return;
    this.state = 'resolved';
    this.value = value;

    if (this.callbacks.length > 0) {
      setTimeout(() => {
        this.callbacks.forEach(cb => {
          cb.onResolved(value);
        });
      });
    }
  };
  const reject = reason => {
    if (this.state !== 'pending') return;
    this.state = 'rejected';
    this.value = reason;
    if (this.callbacks.length > 0) {
      setTimeout(() => {
        this.callbacks.forEach(cb => {
          cb.onRejected(reason);
        });
      });
    }
  };

  try {
    exector(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

Promise1.prototype.then = function (onResolved, onRejected) {
  const self = this;
  onResolved = typeof onResolved === 'function' ? onResolved : value => value; // 指定返回的 promise 为一个成功状态, 结果值为 value
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : reason => {
          throw reason;
        }; // 指定返回的 promise 为一个失败状态, 结果值为 reason

  const promise = new Promise1((resolve, reject) => {
    function handle(callback) {
      // 1. 抛出异常 ===> 返回的 promise 变为 rejected
      try {
        const x = callback(self.value);
        // 2. 返回一个新的 promise ===> 得到新的 promise 的结果值作为返回的promise 的结值
        if (x instanceof Promise1) {
          x.then(resolve, reject); // 一旦 x 成功了,resolve(value), 一旦 x失败了: reject(reason)} else {
          // 3. 返回一个一般值(undefined) ===> 将这个值作为返回的 promise 的成功值
          resolve(x.value);
        } else {
          resolve(x);
        }
      } catch (error) {
        reject(error);
      }
    }
    if (this.state === 'pending') {
      // 当前 promise 还未确定 pending
      // 将 onResolved 和 onRejected 保存起来
      self.callbacks.push({
        onResolved() {
          handle(onResolved);
        },
        onRejected() {
          handle(onRejected);
        }
      });
    }

    if (this.state === 'resolved') {
      setTimeout(() => {
        handle(onResolved);
      });
    }

    if (this.state === 'rejected') {
      setTimeout(() => {
        handle(onRejected);
      });
    }
  });
  return promise;
};

Promise1.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

/*
返回一个指定了成功 value 的 promise 对象
value: 一般数据或 promise
*/
Promise1.resolve = function (value) {
  return new Promise1((resolve, reject) => {
    if (value instanceof Promise1) {
      value.then(resolve, reject);
    } else {
      resolve(value);
    }
  });
};

/*
返回一个指定了失败 reason 的 promise 对象
reason: 一般数据/error
*/
Promise1.reject = function (reason) {
  return new Promise1((resolve, reject) => {
    reject(reason);
  });
};

const p = new Promise1((resolve, reject) => {
  // 2) 在执行器函数中启动异步任务
  setTimeout(() => {
    const time = Date.now();
    // 3) 根据结果做不同处理
    // 3.1) 如果成功了, 调用 resolve(), 指定成功的 value, 变为 resolved 状态
    if (time % 2 === 1) {
      resolve('成功的值 ' + time);
    } else {
      // 3.2) 如果失败了, 调用 reject(), 指定失败的 reason, 变为 rejected 状态
      reject('失败的值' + time);
    }
  }, 2000);
});
// 4) 能 promise 指定成功或失败的回调函数来获取成功的 vlaue 或失败的 reason
p.then(e => {
  console.info('--- resolved --->', e);
}).catch(e => {
  console.error('--- error  --->', e);
});

new Promise1((resolve, reject) => {
  resolve(1);
})
  .then(r => {
    console.info('--- then1 --->', r);
    return 2;
  })
  .then(r => {
    console.info('--- then2 --->', r);
  });

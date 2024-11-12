class RequestPool {
  pool = new Set();
  waitQueue = [];
  idx = 0;
  loading;

  constructor() {
    this.pool = new Set();
    this.waitQueue = [];
  }

  request = (reqFn, max = 10) => {
    return new Promise((resolve, reject) => {
      // 判断运行吃是否已满
      const isFull = this.pool.size >= max;
      // 包装的新请求
      const newReqFn = () => {
        reqFn()
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          })
          .finally(() => {
            // 请求完成后，将该请求从运行池中删除
            this.pool.delete(newReqFn);
            // 从等待队列中取出一个新请求放入等待运行池执行
            const next = this.waitQueue.shift();
            if (next) {
              this.pool.add(next);
              next();
            }
          });
      };
      if (isFull) {
        // 如果运行池已满，则将新的请求放到等待队列中
        this.waitQueue.push(newReqFn);
      } else {
        // 如果运行池未满，则向运行池中添加一个新请求并执行该请求
        this.pool.add(newReqFn);
        newReqFn();
      }
    });
  };

  startLoading = () => {
    if (!this.loading) {
      console.info('--- info --->', 1111111);
      this.idx = 0;
      // this.loading = Loading.service({
      //   fullscreen: true,
      //   lock: true,
      //   text: '加载中，请稍后....',
      //   spinner: 'el-icon-loading',
      //   background: 'rgba(0, 0, 0, 0.7)'
      // });
    }
  };

  closeLoading = () => {
    this.idx = 0;
    if (this.loading) {
      console.info('--- info --->', 22222);
      this.loading.close();
      this.loading = undefined;
    }
  };

  loadingIdx = () => {
    if (this.loading) {
      this.idx++;
      if (this.idx >= 4) {
        this.closeLoading();
      }
    }
  };
}

const requestPool = new RequestPool();

export { requestPool };

// 连续时间内只执行一次
function debounce(fn, time) {
  let timer = null;
  return function () {
    clearTimeout(timer)
    const self = this;
    const args = arguments;
    timer = setTimeout(function () {
      fn.apply(self, args)
    }, time)
  }
}

function test(n) {
  console.info('--- 1 --->', n);
}

debounce(test(1), 1)

// 一段时间内只执行最后一次
function throttle(fn, time) {
  let lastTime = 0;
  return function () {
    const curTime = new Date().getTime();
    if (curTime - lastTime > time) {
      fn.apply(this, arguments)
      lastTime = curTime;
    }
  }
}

throttle(test(2), 1000)

// 要制作精确的 10KB 字符串，我们需要一个长度为 5120 个字符的字符串。UTF-16编码下，每个字符占用2个字节。因此，5120 个字符等于 10240 个字节，相当于 10KB。

// 然后，它会重复将此字符串添加到 LocalStorage，直到抛出错误，表明 LocalStorage 已满。

const computedTotal = () => {
  return new Promise(resolve => {
    let str = '0123456789';

    // 首先，我们创建一个10 KB字符串
    while (str.length < 5120) {
      str += '0123456789';
    }

    // 清除本地存储
    localStorage.clear();

    let temp = str;

    // 继续将10 KB累积到LocalStore中
    const timer = setInterval(() => {
      try {
        localStorage.setItem('temp', temp);
        temp += str; // 将另外10 KB添加到临时字符串
      } catch {
        // 如果抛出错误，这意味着我们已经超出了最大存储空间
        // 考虑每个字符为2字节，以KB为单位计算大小
        resolve((temp.length * 2) / 1024);
        clearInterval(timer);
        // 计算后记得清除LocalStore
        localStorage.clear();
      }
    }, 0);
  });
};

(async () => {
  const total = await computedTotal();
  console.log(`最大容量: ${total}KB`); // 10240KB
})();

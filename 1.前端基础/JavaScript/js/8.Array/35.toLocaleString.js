const arr1 = [1, 'aaa', { a: 1 }, new Date()]
const lc1 = arr1.toLocaleString('en', { timeZone: 'UTC' });
console.info('--- lc1 --->', lc1);
// 1,aaa,[object Object],12/27/2023, 5:15:03 PM

// 始终显示 prices 数组中字符串和数字的货币符号：

const prices = ["RMB 7", 500, 8123, 12];
const lc2 = prices.toLocaleString("zh-CN", { style: "currency", currency: "RMB" });
console.info('--- lc2 --->', lc2);

// RMB 7,RMB 500.00,RMB 8,123.00,RMB 12.00

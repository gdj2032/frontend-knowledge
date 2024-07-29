// ### 3.13 迭代器模式 Iterator Pattern

// 遍历数组
const arr1 = [1, 2, 3, 4, 5];
const iterator = arr1[Symbol.iterator]();

while (true) {
  const { done, value } = iterator.next();
  if (done) {
    break;
  }
  console.log(value);
}

// 遍历对象
const obj1 = {
  name: 'ggg',
  age: 18,
  hobby: 'sleep'
};

obj1[Symbol.iterator] = function () {
  const keys = Object.keys(this);
  let index = 0;
  return {
    next: () => {
      if (index < keys.length) {
        return { done: false, value: this[keys[index++]] };
      }
      return { done: true };
    }
  };
};

for (const value of obj1) {
  console.log(value);
}

const arr2 = [...obj1];
console.info('--- arr2 --->', arr2);

// 内部迭代器的实现

let each = function (arr, callback) {
  for (let i in arr) {
    callback.call(arr[i], i, arr[i]);
  }
};

/**
 * 判断两个数组的元素是否完全相等
 */
let compare = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error('arr1 和 arr2不相等');
  }
  each(arr1, function (i, n) {
    if (n !== arr2[i]) {
      throw new Error('arr1 和 arr2不相等');
    }
  });

  console.log('arr1 和 arr2相等');
};

compare([1, 2, 3], [1, 2, 4]);

// 外部迭代器的实现

/**
 * 外部迭代器的实现
 */
class Iterator {
  constructor(obj) {
    this.obj = obj;

    this.current = 0;
  }

  next() {
    this.current += 1;
  }

  isDone() {
    return this.current >= this.obj.length;
  }

  getCurrentItem() {
    return this.obj[this.current];
  }
}

let compareIsEqual = function (iterator1, iterator2) {
  if (iterator1.length !== iterator2.length) {
    console.log('iterator1和iterator2不相等');
  }
  while (!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrentItem() !== iterator2.getCurrentItem()) {
      console.log('iterator1和iterator2不相等');
    }

    iterator1.next();
    iterator2.next();
  }

  console.log('iterator1和iterator2相等');
};

let iterator1 = new Iterator([1, 2, 3]);
let iterator2 = new Iterator([1, 2, 3]);
compareIsEqual(iterator1, iterator2); //iterator1和iterator2相等

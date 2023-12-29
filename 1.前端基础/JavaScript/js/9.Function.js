this.a = 1;

let obj = {
  name: "Mary",
  age: 13,
  say1: () => {
    return this; //返回的是window
  },
  say2: function () {
    return this; // obj
  },
  say3: function () {
    return {
      name: "Jerry",
      age: 2,
      say3_1: () => {
        return this;
      },
      say3_2: function () {
        return this;
      },
    };
  }
};

console.log('------ 1: ', obj.say1());
console.log('------ 2: ', obj.say2());
console.log('------ 3: ', obj.say3());
console.log('------ 4: ', obj.say3().say3_1());
console.log('------ 5: ', obj.say3().say3_2());

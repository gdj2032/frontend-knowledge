// ### 3.14 Object.hasOwnProperty()
let obj = { a: 1, b: 2, c: 3, d: 4 }

let isHave = obj.hasOwnProperty('a')
console.log(isHave);
// true

let arr = ['A', 'B', 'C', 'D', 'E', 'F']

isHave = arr.hasOwnProperty(3)
console.log(isHave);
// true

isHave = arr.hasOwnProperty(8)
console.log(isHave);
// false
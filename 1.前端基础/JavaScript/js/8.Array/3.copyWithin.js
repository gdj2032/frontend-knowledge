// ### 3. Array.prototype.copyWithin()
const arr = [1, 2, 3, 4, 5]

const arr1 = arr.copyWithin(0, 3, 4)
const arr2 = arr.copyWithin(1, 3)

console.info({ arr1, arr2 });
// { arr1: [ 4, 4, 5, 4, 5 ], arr2: [ 4, 4, 5, 4, 5 ] }

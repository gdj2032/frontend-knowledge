// ### 3.11 Object.getOwnPropertySymbols()
const obj = {
  [Symbol('c')]: 'c',
  d: 'd'
};
const a = Symbol('a');
const b = Symbol.for('b');

obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';

const objSym = Object.getOwnPropertySymbols(obj);

console.log(objSym);
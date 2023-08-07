const q = {
  valueOf() {
    return 2
  },
  toString() {
    return '3'
  }
}

const q1 = 1 + q;
const q2 = '1'.concat(q)

const w = 4 + [1, 2, 3]


const e1 = 2 + '2'
const e2 = 2 * '2'
const e3 = 'a' + + 'b'
console.info('--- result --->', { q1, q2, w, e1, e2, e3 });

const r1 = parseInt('10101110', 2).toString(2);
const r2 = r1 << 2
const r3 = r2.toString(2)
const r4 = r3 << 2;

console.info('--- r1 --->', { r1, r2, r3, r4 });

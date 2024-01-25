const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const addToDiv = (a, b, c) => div(add(a, b), c);

const addToMul = (a, b, c) => mul(add(a, b), c);

console.log(addToDiv(1, 2, 3));
console.log(addToMul(4, 5, 6));
//# sourceMappingURL=0_baseonly-node-resolve.mjs.map

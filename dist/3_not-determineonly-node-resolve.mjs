const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const addToDiv = (a, b, c) => div(add(a, b), c);

const addToMul = (a, b, c) => mul(add(a, b), c);

const numbers = (a, b, c) => {
  console.log(addToDiv(a, b, c));
  console.log(addToMul(a, b, c));
};

export { numbers };
//# sourceMappingURL=3_not-determineonly-node-resolve.mjs.map

import { addToDiv } from "mod-b/dist/index.min.mjs";
import { addToMul } from "mod-c/dist/index.min.mjs";

export const numbers = (a, b, c) => {
  console.log(addToDiv(a, b, c));
  console.log(addToMul(a, b, c));
};

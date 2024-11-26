function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(multiply());
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));

function sum() {
  let res = 0;

  // length 프로퍼티를 가진 유사비열이므로 for문으로 순회 ✅
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

function sum(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function increment(n) {
  return n + 1;
}

function decrement(n) {
  return n - 1;
}

function makeInt(n) {
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  return parseFloat(n);
}

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
console.log(increment(1));
console.log(decrement(1));
console.log(makeInt(1));
console.log(makeInt("e"));
console.log(preserveDecimal(1.242));
console.log(preserveDecimal("e"));

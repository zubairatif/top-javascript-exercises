const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const multiply = function (numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  let factorial = 1;
  for (i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
  // let sum = 0;
  // for (let i in arr) {
  //   return sum += arr[i];
  // }
};

const multiply = function(a, b) {
  return a *b;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	let fact = 1;
  for (let i = n;i>0; i--) {
      fact *= i;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

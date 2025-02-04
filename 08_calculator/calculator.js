const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2){
  return num1 - num2
};


const sum = function(sumarr) {
	let i = 0;
  let sum = 0;
  while (i <= sumarr.length - 1) {
    sum += sumarr[i]
    i++;
  }
  return sum;
};

const multiply = function(multiplyarr) {
	let i = 0;
  let mult = 1;
  while (i <= multiplyarr.length - 1) {
    mult *= multiplyarr[i]
    i++;
  }
  return mult;
};

const power = function(num1, num2) {
	let i = num2;
  let res = 1;
  while (i > 0) {
    res *= num1
    i--;
  }
  return res;
};

const factorial = function(num) {
	let res = 1;
  while (num > 0) {
    res *= num
    num--;
  }
  return res;
};

// честно говоря, я уже устал
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const log = function (value) {
  console.log(value);
}

let arrowSum = ((a,b) => a + b);
let arrowSubtract = ((a,b) => a - b);
let arrowMultiply = ((a,b) => a * b);
let arrowDivide = ((a,b) => a / b);

let arrowTotal = (() => 
arrowDivide(arrowSubtract(arrowMultiply(arrowSum(2,4), arrowSum(5,2)),2),5))

let arrowLog = ((value) => console.log(value))

value = arrowTotal()
arrowLog(value)



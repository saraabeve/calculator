let firstOperand = undefined;
let secondOperand = undefined;
let currentOpertaor = undefined;
let currentValue = "0";
let history = [];

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const resetButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");

//when a num button is clicked this fun will update the first or second operand
function updateOperand(digit) {
  let str = String(digit);
  if (firstOperand === undefined) {
    firstOperand = str;
  } else if (currentOpertaor === undefined) {
    firstOperand += str;
  } else if (secondOperand === undefined) {
    secondOperand = str;
  } else {
    secondOperand += str;
  }
}

// this function update the current opertaor, excute calculate in case its needed
function UpdateOperator(operator) {
  if (currentOpertaor === undefined) {
    currentOpertaor = operator;
  } else {
    currentValue = eval(firstOperand + currentOpertaor + secondOperand);
    currentOpertaor = operator;
    firstOperand = currentValue;
    secondOperand = undefined;
  }
}
//returns the current value of the calculation
function answer() {
  if (secondOperand === undefined) {
    alert(currentValue);
  } else {
    alert(eval(firstOperand + currentOpertaor + secondOperand));
  }
  reset();
  return;
}
//deletes all values of the calculation
function reset() {
  firstOperand = undefined;
  secondOperand = undefined;
  currentOpertaor = undefined;
  currentValue = "0";
  calculateNeed = false;
  return;
}
//delete the last input in the calculator
function back() {
  if (secondOperand != null) {
    secondOperand = null;
  } else if (currentOpertaor != null) {
    currentOpertaor = null;
  } else {
    firstOperand = null;
  }
}
//event listners
numbers.forEach(function (num) {
  num.addEventListener("click", function () {
    return updateOperand(num.getAttribute("value"));
  });
});

operators.forEach(function (operator) {
  operator.addEventListener("click", function () {
    return UpdateOperator(operator.getAttribute("value"));
  });
});

resetButton?.addEventListener("click", reset);
equalButton?.addEventListener("click", answer);

let firstOperand = undefined;
let secondOperand = undefined;
let currentOpertaor = undefined;
let output = undefined;
let currentValue = 0;

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
// this fun update the current opertaor, excute calculate in case its needed
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
//returns the current value of the caculation
function answer() {
  if (secondOperand === undefined) {
    alert(currentValue);
  } else {
    alert(eval(firstOperand + currentOpertaor + secondOperand));
  }
  reset();
}
//deletes all values of the calculation
function reset() {
  firstOperand = undefined;
  secondOperand = undefined;
  currentOpertaor = undefined;
  output = undefined;
  currentValue = undefined;
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

let firstOperand: string = "";
let secondOperand: string = "";
let currentOpertaor: string = "";
let currentValue: string = "";
let output = [];
let operationLog = [];
let calculateMode: string = "simple";
let apiMode: string = "local";

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const resetButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const sciButtom = document.getElementById("scimode");
const resultScreen = document.getElementById("screen");
const deleteButton = document.getElementById("back");
const oplog = document.querySelector(".history");

//when a num button is clicked this fun will update the first or second operand
function updateOperand(digit: string) {
  if (firstOperand === "") {
    firstOperand = digit;
  } else if (currentOpertaor === "") {
    firstOperand += digit;
  } else if (secondOperand === "") {
    secondOperand = digit;
  } else {
    secondOperand += digit;
  }
  displayScreen();
}

function displayScreen() {
  output[0] = firstOperand;
  output[1] = currentOpertaor;
  output[2] = secondOperand;

  resultScreen.innerText = output.join("");
}

function updateCalulateMode() {
  if (calculateMode === "simple") {
    calculateMode = "science";
  } else {
    calculateMode = "simple";
  }
  reset();
}
function calculateSimple(operator: string) {
  currentValue = eval(firstOperand + currentOpertaor + secondOperand);
  firstOperand = currentValue;
  secondOperand = "";
  currentOpertaor = operator;
  displayScreen();
}
function calculateSceince(operator: string) {}

// this function update the current opertaor, excute calculate in case its needed
function UpdateOperator(operator: string) {
  if (currentOpertaor === "") {
    currentOpertaor = operator;
    displayScreen();
  } else {
    if (secondOperand != "") {
      if (calculateMode === "simple") {
        calculateSimple(operator);
      } else {
        calculateSceince(operator);
      }
    }
  }
}
//returns the current value of the calculation
function answer() {
  let answerM: string = "=" + currentValue;
  displayScreen();
  operationLog.push(output.join("") + answerM);
  oplog.innerHTML = operationLog.join("") + "";
  reset();
}
//deletes all values of the calculation
function reset() {
  firstOperand = "";
  secondOperand = "";
  currentOpertaor = "";
  currentValue = "";
  displayScreen();
  operationLog = [];
  oplog.innerHTML = "";
}
//delete the last input in the calculator
function back() {
  if (secondOperand != "") {
    secondOperand = "";
  } else if (currentOpertaor != "") {
    currentOpertaor = "";
  } else {
    firstOperand = "";
  }
  displayScreen();
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
sciButtom.addEventListener("click", updateCalulateMode);
deleteButton.addEventListener("click", back);
equalButton.addEventListener("click", answer);

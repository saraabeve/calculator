let firstOperand = "";
let secondOperand = "";
let currentOpertaor = "";
let waitingAnotherOperator = true;
let currentValue = "";
let output = [];
let operationLog = [];
let calculateMode = "simple";
let apiMode = "local";

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const resetButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const sciButtom = document.getElementById("scimode");
const resultScreen = document.getElementById("screen");
const deleteButton = document.getElementById("back");
const oplog = document.querySelector(".history");

function updateOperand(digit) {
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
function calculateSimple(operator) {
  currentValue = parseFloat(
    eval(firstOperand + currentOpertaor + secondOperand)
  ).toFixed(1);
  if (waitingAnotherOperator) {
    firstOperand = currentValue;
    secondOperand = "";
    currentOpertaor = operator;
    displayScreen();
  }
}

function calculateSceince(operator) {
  currentValue = parseFloat(
    eval(firstOperand + currentOpertaor + secondOperand)
  ).toFixed(1);
  firstOperand = currentValue;
  secondOperand = "";
  currentOpertaor = operator;
}
function UpdateOperator(operator) {
  if (currentOpertaor === "") {
    currentOpertaor = operator;
    displayScreen();
  } else {
    waitingAnotherOperator = false;
    if (secondOperand != "") {
      if (calculateMode === "simple") {
        calculateSimple(operator);
      } else {
        calculateSceince(operator);
      }
    }
  }
}
function answer() {
  waitingAnotherOperator = false;
  calculateSimple();
  resultScreen.innerText = currentValue;
  operationLog.push(output);
  oplog.innerHTML = operationLog.join("");
}
function reset() {
  firstOperand = "";
  secondOperand = "";
  currentOpertaor = "";
  currentValue = "";
  operationLog = [];
  oplog.innerHTML = "";
}
function back() {
  if (secondOperand != "") {
    secondOperand = secondOperand.toString().slice(0, -1);
  } else if (currentOpertaor != "") {
    currentOpertaor = "";
  } else {
    firstOperand = firstOperand.toString().slice(0, -1);
  }
  displayScreen();
}
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
resetButton === null || resetButton === void 0
  ? void 0
  : resetButton.addEventListener("click", reset);
sciButtom.addEventListener("click", updateCalulateMode);
deleteButton.addEventListener("click", back);
equalButton.addEventListener("click", answer);

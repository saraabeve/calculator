let firstOperand = undefined;
let secondOperand = undefined;
let currentOpertaor = undefined;
let currentValue = undefined;
let calculateMode = "simple";
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const resetButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
function updateOperand(digit) {
    let str = String(digit);
    if (firstOperand === undefined) {
        firstOperand = str;
    }
    else if (currentOpertaor === undefined) {
        firstOperand += str;
    }
    else if (secondOperand === undefined) {
        secondOperand = str;
    }
    else {
        secondOperand += str;
    }
}
function UpdateOperator(operator) {
    if (currentOpertaor === undefined) {
        currentOpertaor = operator;
    }
    else {
        currentValue = eval(firstOperand + currentOpertaor + secondOperand);
        currentOpertaor = operator;
        firstOperand = currentValue;
        secondOperand = undefined;
    }
}
function answer() {
    if (secondOperand === undefined) {
        alert(currentValue);
    }
    else {
        alert(eval(firstOperand + currentOpertaor + secondOperand));
    }
    reset();
    return;
}
function reset() {
    firstOperand = undefined;
    secondOperand = undefined;
    currentOpertaor = undefined;
    currentValue = "0";
    return;
}
function back() {
    if (secondOperand != null) {
        secondOperand = null;
    }
    else if (currentOpertaor != null) {
        currentOpertaor = null;
    }
    else {
        firstOperand = null;
    }
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
resetButton?.addEventListener("click", reset);
equalButton?.addEventListener("click", answer);
export {};

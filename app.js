"use strict";

const displayClear = document.querySelector(".displayClear");
const deleteDisplay = document.querySelector(".delete");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equality = document.querySelector(".equal");
let currentOperand = document.querySelector(".current-operand");
let previousOperand = document.querySelector(".previous-operand");

function displayCurrentOperand(input) {
  currentOperand.textContent += input;
}

function displayPreviousOperand(input) {
  previousOperand.textContent += input;
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const userInput = number.textContent;
    displayCurrentOperand(userInput);
  });
});

function allClear() {
  currentOperand.textContent = "";
  previousOperand.textContent = "";
  operators.textContent = undefined;
}

displayClear.addEventListener("click", () => {
  allClear();
});

function toDelete() {
  const currentText = currentOperand.textContent.toString();
  if (currentText.length > 0) {
    const newText = currentText.slice(0, -1);
    currentOperand.textContent = newText;
  }
}

deleteDisplay.addEventListener("click", () => {
  toDelete();
});

function selectOperator(sign) {
  if (currentOperand.textContent === "") {
    return;
  }
  if (previousOperand.textContent != "") {
    operators.textContent = sign;
  }
  operators.textContent = sign;
  previousOperand.textContent = currentOperand.textContent;
  currentOperand.textContent = "";
}

function calculate() {
  let computed;
  const firstNumber = parseFloat(previousOperand.textContent);
  const currentNumber = parseFloat(currentOperand.textContent);
  if (isNaN(firstNumber) || isNaN(currentNumber)) return;

  switch (operators.textContent) {
    case "+":
      computed = firstNumber + currentNumber;
      break;
    case "-":
      computed = firstNumber - currentNumber;
      break;
    case "*":
      computed = firstNumber * currentNumber;
      break;
    case "/":
      computed = firstNumber / currentNumber;
      break;
      default:
        return;
  }
    currentOperand.textContent = computed;
    previousOperand.textContent = '';
    operators.textContent = undefined;
    console.log(currentOperand.textContent)
}

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    selectOperator(operators.textContent);
  });
});

// function displayResult(result) {
//     currentOperand.textContent = result;
//     previousOperand.textContent = '';
//     operators.textContent = undefined;
// }


equality.addEventListener("click", () => {
    /* const resultText = */  calculate()
    // displayResult(resultText)
});

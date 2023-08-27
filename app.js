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
    compute();
  }
  operators.textContent = sign;
  previousOperand.textContent = currentOperand;
  currentOperand.textContent = "";
}

function compute() {
  let compute;
  const firstNumber = parseFloat(previousOperand);
  const currentNumber = parseFloat(currentOperand);
  if (isNaN(firstNumber) || isNaN(currentNumber)) return;

  switch (operators) {
    case "+":
      compute = firstNumber + currentNumber;
      break;
    case "-":
      compute = firstNumber - currentNumber;
      break;
    case "*":
      compute = firstNumber * currentNumber;
      break;
    case "/":
      compute = firstNumber / currentNumber;
      break;
  }
}

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        selectOperator(operators.textContent)
    })
})
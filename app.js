"use strict";

const displayClear = document.querySelector(".displayClear");
const deleteDisplay = document.querySelector(".delete");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const root = document.querySelector(".operatorSqrt")
const equality = document.querySelector(".equal");
const negative = document.querySelector(".negate")
let currentOperand = document.querySelector(".current-operand");
let previousOperand = document.querySelector(".previous-operand");


// Function to display current clicked number 
function displayCurrentOperand(input) {
    currentOperand.textContent += input;
}

// Function to display previuosly clicked number
function displayPreviousOperand(input) {
  previousOperand.textContent += input;
}

// Event listener to handle numbers click
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const userInput = number.textContent;
    displayCurrentOperand(userInput);
  });
});

// Function to Clear all contents at once
function allClear() {
  currentOperand.textContent = "";
  previousOperand.textContent = "";
  operators.textContent = undefined;
}

// Event Listeners to handle all clear button
displayClear.addEventListener("click", () => {
  allClear();
});

// Function to delete dpsplayed contents
function toDelete() {
  const currentText = currentOperand.textContent.toString();
  if (currentText.length > 0) {
    const newText = currentText.slice(0, -1);
    currentOperand.textContent = newText;
  }
}

// Event listener to handle delete button
deleteDisplay.addEventListener("click", () => {
  toDelete();
});

//function to select operators
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

//function to calculate values based on provided operators
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
    case "**":
      computed = firstNumber ** currentNumber;
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
    selectOperator(operator.textContent);
  });
});

//function to calculate the squareroot of numbers 
function calculateSquareRoot(num) {
    if(num != "") {
      return Math.sqrt(parseFloat(num))
    }
}

//The event listener to handle the squareroot function and display it
root.addEventListener("click", () => {
  currentOperand.textContent = calculateSquareRoot(currentOperand.textContent)
})

//The event listener to display computed values when calculated
equality.addEventListener("click", () => {
    calculate()
});

// Function to prepend negative sign to numbers when needed
function negate() {
  currentOperand.textContent = "-" + currentOperand.textContent
}

// Event listener to display prepended nagative sign
negative.addEventListener("click", () => {
  negate()
})

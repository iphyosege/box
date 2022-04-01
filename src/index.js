//program for a simple calculator
// take an operator
const operator = prompt("Enter the operator (either +, -, *, / )");
var firstNumber = prompt("Enter the firstNumber");
var secondNumber = prompt("Enter the secondNumber");
//result using if....else if....else
let result;
// using if....else if....else
if (operator == "+") {
  result = Number(firstNumber) + Number(secondNumber);
} else if (operator == "-") {
  result = Number(firstNumber) - Number(secondNumber);
} else if (operator == "*") {
  result = Number(firstNumber) * Number(secondNumber);
} else if (operator == "/") {
  result = Number(firstNumber) / Number(secondNumber);
} else {
  result = Number(firstNumber) + Number(secondNumber);
}

console.log(addition);

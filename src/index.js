/program for a simple calculator
// take an operator
const operator = parseFloat(prompt("Enter the operator (either +, -, *, / )"));
var firstNumber = parsefloat(prompt("Enter the firstNumber"));
var secondNumber = parseFloat(prompt("Enter the secondNumber"));
//result using if....else if....else
let result;
// using if....else if....else
if (operator === "+") {
  result = Number(firstNumber) + Number(secondNumber);
  console.log(addition);
} 
else if (operator === "-") {
  result = Number(firstNumber) - Number(secondNumber);
  console.log(subtract);
} 
else if (operator === "*") {
  result = Number(firstNumber) * Number(secondNumber);
  console.log(multiply);
} 
else if (operator === "/") {
  result = Number(firstNumber) / Number(secondNumber);
  console.log(division);
} 
else {
  result = Number(firstNumber) + Number(secondNumber);
}

// parseFloat() function converts string input into a number data type
const numOne = parseFloat(prompt("Enter a number"));
const operator = prompt("Enter an operator(+, -, *, /)");
const numTwo = parseFloat(prompt("Enter another number"));
let result = 0; // The result variable will hold the value or output

if(operator === "+") { // if operator value is + then it will add the values numOne and numTwo
    result = numOne + numTwo;
} else if(operator === "-") {
    result = numOne - numTwo;
} else if(operator === "*") {
    result = numOne * numTwo;
} else if(operator === "/") {
    result = numOne / numTwo;
} 
console.log(`${numOne} ${operator} ${numTwo} = ${result}`);
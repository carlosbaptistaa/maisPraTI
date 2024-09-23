const prompt = require('prompt-sync')()

let factorialNumber = Number(prompt("Enter a number to calculate its factorial: "));
let factorial = 1;

for (let i = factorialNumber; i > 0; i--) {
    factorial *= i;
}

console.log("Factorial: " + factorial);
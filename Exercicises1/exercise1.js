const prompt = require('prompt-sync')()

let number1 = Number(prompt("Enter an integer: "));
if (number1 % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

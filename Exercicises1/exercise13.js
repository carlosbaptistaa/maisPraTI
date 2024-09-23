const prompt = require('prompt-sync')()

let sum = 0;
let count = 0;
let input;
do {
    input = Number(prompt("Enter a decimal number (or 0 to finish): "));
    if (input !== 0) {
        sum += input;
        count++;
    }
} while (input !== 0);
if (count > 0) {
    console.log("Average: " + (sum / count).toFixed(2));
} else {
    console.log("No numbers entered.");
}
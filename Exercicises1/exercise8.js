const prompt = require('prompt-sync')()

let value1 = Number(prompt("Enter the first value: "));
let value2 = Number(prompt("Enter the second value: "));
if (value1 < value2) {
    console.log(value1, value2);
} else {
    console.log(value2, value1);
}
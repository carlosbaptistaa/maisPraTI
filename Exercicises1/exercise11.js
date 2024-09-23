const prompt = require('prompt-sync')()

let totalSum = 0;

for (let i = 0; i < 5; i++) {
    let num = Number(prompt("Enter a number: "));
    totalSum += num;
}

console.log("Total sum: " + totalSum);
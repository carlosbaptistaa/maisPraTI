const prompt = require('prompt-sync')()

let appleCount = Number(prompt("Enter the number of apples: "));
let applePrice = appleCount < 12 ? 0.30 : 0.25;
let totalCost = appleCount * applePrice;

console.log("Total cost: $" + totalCost.toFixed(2));
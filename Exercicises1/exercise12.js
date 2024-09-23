const prompt = require('prompt-sync')()

let tableNumber = Number(prompt("Enter a number for the multiplication table: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}
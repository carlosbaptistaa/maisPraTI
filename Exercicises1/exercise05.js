const prompt = require('prompt-sync')()

let weight = Number(prompt("Enter your weight (kg): "));
let height = Number(prompt("Enter your height (m): "));
let bmi = weight / (height ** 2);

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi >= 18.5 && bmi < 25) {
    console.log("Normal weight");
} else if (bmi >= 25 && bmi < 30) {
    console.log("Overweight");
} else {
    console.log("Obesity");
}
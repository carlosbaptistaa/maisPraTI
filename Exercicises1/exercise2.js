const prompt = require('prompt-sync')()

let age = Number(prompt("Enter your age: "));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 17) {
    console.log("Teenager");
} else if (age >= 18 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Elder");
} else {
    console.log("Invalid age");
}
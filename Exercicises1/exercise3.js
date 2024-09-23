const prompt = require('prompt-sync')()

let grade = Number(prompt("Enter a grade from 0 to 10: "));

if (grade >= 7) {
    console.log("Approved");
} else if (grade >= 5 && grade < 7) {
    console.log("In recovery");
} else {
    console.log("Failed");
}
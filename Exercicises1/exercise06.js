const prompt = require('prompt-sync')()

let sideA = Number(prompt("Enter side A: "));
let sideB = Number(prompt("Enter side B: "));
let sideC = Number(prompt("Enter side C: "));

if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
    if (sideA === sideB && sideB === sideC) {
        console.log("Equilateral triangle");
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        console.log("Isosceles triangle");
    } else {
        console.log("Scalene triangle");
    }
} else {
    console.log("Not a valid triangle");
}
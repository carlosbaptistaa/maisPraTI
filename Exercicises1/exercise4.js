const prompt = require('prompt-sync')()

console.log("1. Option One\n2. Option Two\n3. Option Three");

let option = Number(prompt("Choose an option (1-3): "));

switch (option) {
    case 1:
        console.log("You selected Option One.");
        break;
    case 2:
        console.log("You selected Option Two.");
        break;
    case 3:
        console.log("You selected Option Three.");
        break;
    default:
        console.log("Invalid option.");
}

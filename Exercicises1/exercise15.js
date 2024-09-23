let fib1 = 0
let fib2 = 1
let nextFib

console.log(fib1);
console.log(fib2);

for (let i = 3; i <= 10; i++) {
    nextFib = fib1 + fib2;
    console.log(nextFib);
    fib1 = fib2;
    fib2 = nextFib;
}
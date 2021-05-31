const add = (a, b) => {
    console.log(`adding number ${a} + ${b}`, );
    return a + b;
}

const multiply = (a, b) => {
    console.log(`Multiplying number ${a} * ${b}`, );
    return a * b;
}

const subtract = (a, b) => {
    console.log(`Subtracting number ${a} - ${b}`, );
    return a - b;
}

// execute the functions from right to left
const comp = (a, b) => {
    return [add, multiply, subtract].reduceRight((result, currentFunction) => {
        return currentFunction(result, b);
    }, a)
}
console.log(comp(10, 5));
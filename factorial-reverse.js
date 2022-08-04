function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}

let number = 5;
let fact = factorial(number);
console.log('Factorial of:', number, fact);
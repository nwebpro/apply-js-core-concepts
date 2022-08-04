function getFactorial(number){
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}

let factorial = getFactorial(8);
console.log('Factorial of 8 is:', factorial);
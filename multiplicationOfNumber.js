function multiplicationOfNumber(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
        console.log(i, result);
    }
    return result;
}

let result = multiplicationOfNumber(10);
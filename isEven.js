function isEven(number){
    let reminder = number % 2;
    if(reminder === 0){
        return true;
    }else{
        return false;
    }
}

// This is Even number
let myNumberIsEven = isEven(300);
console.log(myNumberIsEven);

// This is Odd number
let myNumberIsOdd = isEven(209);
console.log(myNumberIsOdd);


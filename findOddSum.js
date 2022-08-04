function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

function getOddNumberOfAnArray(numbers){
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element % 2 !== 0){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

let myNumbers = [12, 33, 24, 55, 65, 67, 55, 44, 35];
let oddNumbers = getOddNumberOfAnArray(myNumbers);
console.log(oddNumbers);
let oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('All Odd Number Total Sum:', oddNumberSum);
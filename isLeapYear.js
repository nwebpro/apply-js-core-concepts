function isLeapYear(year){
    let reminder = year % 4;
    if(reminder === 0){
        return true;
    }else{
        return false;
    }
}

let isMyYearLeapYear = isLeapYear(2023);
console.log('My Year Leap Year:', isMyYearLeapYear);
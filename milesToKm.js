// Miles to Kilometer convert with Function
function milesToKilometer(miles){
    let kilometer = miles * 1.609;
    return kilometer;
}

let totalMiles = 50;
let totalKm = milesToKilometer(totalMiles);
console.log('Total Kilometer:', totalKm);
// Inch to Feet Convert
let myInches = 144;
let myFeet = myInches / 12;
console.log('144 Inch', myFeet, 'Feet');

// Inch to Feet convert with Function
function inchToFeet(inches){
    let feet = inches / 12;
    return feet;
}

let dadaInches = 144;
let dadaFeet = inchToFeet(dadaInches);
console.log('Dada Feet', dadaFeet);

let nanaInches = 60;
let nanaFeet = inchToFeet(nanaInches);
console.log('Nana Feet', nanaFeet);

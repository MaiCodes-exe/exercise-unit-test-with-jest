// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

//Exercise 12
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// //Exercise 13
const fromDollarToYen = function(dollarAmmount){
    console.log(dollarAmmount)
    let valueInYen = (dollarAmmount / oneEuroIs.USD) * oneEuroIs.JPY;
    return valueInYen;
}

// //Exercise 13. 2
const fromYenToPound = function(yenAmmount) {
    let valueInPound= (yenAmmount / oneEuroIs.JPY) * oneEuroIs.GBP;
    return valueInPound;
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound };

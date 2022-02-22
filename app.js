// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

//Exercise 12
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

//Exercise 13
const fromDollarToYen = function(valueInDollar){
    
    let valueInEuro = valueInDollar / oneEuroIs.USD
    var valueInYen = valueInEuro * oneEuroIs.JPY;
    
    return parseInt((valueInYen * 100)) / 100;
}

//Exercise 13. 2
const fromYenToPound = function(valeuInYen){
    
    let valueInEuro = valeuInYen / oneEuroIs.JPY       
    var valueInPound = valueInEuro * oneEuroIs.GBP;
    
    return parseInt((valueInPound * 100000)) / 100000;
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
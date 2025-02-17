
//Exercises from 5-11
const { sum } = require('./app.js');
// // start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

//Exercise 11
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

//exercise 13
test("One dollar should be x yens", function(){

    const { fromDollarToYen } = require('./app.js')

    const yen =(3.5 / 1.2) * 127.9; 
    
    expect(fromDollarToYen(3.5)).toBe(yen); 
})

//exercise 13.2
test("One yen should be x pounds", function(){

    const { fromYenToPound } = require('./app.js')

    const expected = (3.5 / 127.9) * 0.8; 
    
    expect(fromYenToPound(3.5)).toBe(expected); 
})

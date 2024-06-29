'use strict';

// let hasDriversLic = false;
// const passTest = true;

// if (passTest) hasDriversLic = true;
// if (hasDriversLic) console.log(`I can drive`);

// //const interface = "Audio";
// //const private = 555;

// function logger() {
//     console.log(`My name is Deividas`);
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juce with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(5, 1));

// function calcAge1(birthYear) {
//     return 2024 - birthYear;
// }

// const age1 = calcAge1(1977);

// //console.log(calcAge1(1977));

// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear;
// }

// const age2 = calcAge2(1991);


// console.log(age1, age2);


// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(2000);
// console.log(age3);



// const yearsTillRet = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 67 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsTillRet(1979, 'Elorts'));
// console.log(yearsTillRet(1969, 'Arturas'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);



    //console.log(apples, oranges);
    const juice = `Juce with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
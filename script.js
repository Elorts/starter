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

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);



//     //console.log(apples, oranges);
//     const juice = `Juce with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// console.log(yearsTillRet(1979, 'Elorts'));
// console.log(yearsTillRet(1969, 'Arturas'));

// const yearsTillRet = function (birthYear, firstName) {
//     const retirement = 67 - age;
//     const age = 2024 - birthYear;
//     return `${firstName} retires in ${retirement} years.`;
// }

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const checkWinner = function (scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= scoreKoalas * 2)
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    else if (scoreKoalas >= scoreDolphins * 2)
        console.log(`KLoalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    else
        console.log(`No team wins!`)
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);


//   console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49))); // test data 1

//console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27))); // test data 2

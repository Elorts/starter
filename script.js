'use strict';

let hasDriversLic = false;
const passTest = true;

if (passTest) hasDriversLic = true;
if (hasDriversLic) console.log(`I can drive`);

//const interface = "Audio";
//const private = 555;

function logger() {
    console.log(`My name is Deividas`);
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juce with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 1));

function calcAge1(birthYear) {
    return 2024 - birthYear;
}

console.log(calcAge1(1977));


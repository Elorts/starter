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
// //     console.log(apples, oranges);
// //     const juice = `Juce with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }

// // console.log(fruitProcessor(5, 1));

// // function calcAge1(birthYear) {
// //     return 2024 - birthYear;
// // }

// // const age1 = calcAge1(1977);

// // //console.log(calcAge1(1977));

// // const calcAge2 = function (birthYear) {
// //     return 2024 - birthYear;
// // }

// // const age2 = calcAge2(1991);


// // console.log(age1, age2);


// // // Arrow function
// // const calcAge3 = birthYear => 2037 - birthYear;

// // const age3 = calcAge3(2000);
// // console.log(age3);



// // const yearsTillRet = (birthYear, firstName) => {
// //     const age = 2024 - birthYear;
// //     const retirement = 67 - age;
// //     return `${firstName} retires in ${retirement} years.`;
// // }

// // console.log(yearsTillRet(1979, 'Elorts'));
// // console.log(yearsTillRet(1969, 'Arturas'));

// // function cutFruitPieces(fruit) {
// //     return fruit * 4;
// // }

// // function fruitProcessor(apples, oranges) {
// //     const applePieces = cutFruitPieces(apples);
// //     const orangePieces = cutFruitPieces(oranges);



// //     //console.log(apples, oranges);
// //     const juice = `Juce with ${applePieces} apples and ${orangePieces} oranges.`;
// //     return juice;
// // }

// // console.log(fruitProcessor(2, 3));

// // console.log(yearsTillRet(1979, 'Elorts'));
// // console.log(yearsTillRet(1969, 'Arturas'));

// // const yearsTillRet = function (birthYear, firstName) {
// //     const retirement = 67 - age;
// //     const age = 2024 - birthYear;
// //     return `${firstName} retires in ${retirement} years.`;
// // }

// // const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// // const checkWinner = function (scoreDolphins, scoreKoalas) {
// //     if (scoreDolphins >= scoreKoalas * 2)
// //         console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
// //     else if (scoreKoalas >= scoreDolphins * 2)
// //         console.log(`KLoalas win (${scoreKoalas} vs. ${scoreDolphins})`);
// //     else
// //         console.log(`No team wins!`)
// // }

// // const scoreDolphins = calcAverage(44, 23, 71);
// // const scoreKoalas = calcAverage(65, 54, 49);

// // checkWinner(scoreDolphins, scoreKoalas);


// //   console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49))); // test data 1

// //console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27))); // test data 2

// // const years1 = new Array(1221, 1331, 1441, 1551);

// // const years2 = [1661, 1771, 1881, 1991];

// // console.log(years1[3]);

// // console.log(years2);

// // const jonas = ['jonas', 2 * 2, years1]

// // console.log(jonas[1]);

// // console.log(jonas.length);

// // const years3 = [1661, 1771, 1881, 1991];

// // const newArr = years3.push('Valious');

// // console.log(years3, `Length: ${years3.length}`);

// // console.log(newArr);


// // years3.unshift('Varveklis');

// // console.log(years3, `Length: ${years3.length}`);

// // // remove last element - pop
// // // || first || - shift

// // // 


// // const calcTip = function (bill) {
// //     if (50 <= bill && bill <= 300)
// //         return bill * 0.15;
// //     else
// //         return bill * 0.2;
// // }

// // const bills = [125, 555, 44];

// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// // const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// // console.log(tips);
// // console.log(totals);

// // objects:

// // const deividas = {
// //     firstName: 'Deividas',
// //     lastName: 'Strole',
// //     job: 'lazy',
// //     friends: ['computer', 'TV', 'a lizard on a hike'],

// //     calcAge: function (birthYear) {
// //         return 2024 - birthYear;
// //     }
// // };

// // // console.log(deividas);

// // console.log(deividas.friends);

// // // const interest = prompt(`firstName, lastName, job, friends`);

// // // console.log(deividas[interest]);

// // deividas.location = 'LA';

// // console.log(`${deividas.firstName} has ${deividas.friends.length} friends, and his best friend is called ${deividas.friends[0]}`);

//----------------------------------------------------
// const deividas = {
//     firstName: 'Deividas',
//     lastName: 'Strole',
//     job: 'lazy',
//     friends: ['computer', 'TV', 'a lizard on a hike'],
//     birthYear: 1979,
//     hasLicense: false,

//     // calcAge: function () {
//     //     return 2024 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2024 - this.birthYear;
//         return this.age;
//     },


//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he ${this.hasLicense ? 'has' : 'has no'} driver's lic.`
//     }
// };

// console.log(deividas.getSummary());

//------------------------------------------------------

// console.log(deividas.calcAge());

// console.log(deividas.age);



// console.log(deividas.getSummary());
// console.log(deividas[`calcAge`](1979));

// const lic = function () {
//     return hasLicense ? 'has' : 'has no';
// }

// console.log(`${deividas.firstName} is a ${deividas.age} old programmer, and he ${lic} driver's license.`);

//******************************************************************************** */

/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}

const a = [];
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights: ${rep} 🥓`);
    a.push(rep);
}

console.log(a);
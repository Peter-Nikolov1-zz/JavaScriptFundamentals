/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Peter');
console.log(23);

let firstName = "Peter";
let lastName = " Nikolov";
let peterFullName = firstName + lastName;

let petersWifeName = "Taylor";
let petersWifeLastName = " Nikolov";
let petersWifeFullName = petersWifeName + petersWifeLastName;

// Variable Lecture Test
let country = "USA";
let continent = "North America";
let population = "7.8 billion";

let peter_nikolov = "PN";
let $function = "24";

let person = "peter";
let PI = 3.14159;

let myFirstJob = 'Coder';

console.log(firstName + lastName);
console.log(peterFullName);
console.log(petersWifeFullName);

console.log(country);
console.log(continent);
console.log(population);



let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'peter');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let language;
let isIsland = true;

console.log(isIsland);

let age = 30;
age = 43;

const birthYear = 1994;
// birthYear = 1993;

//  
var job = 'programmer';
job = 'teacher';


// Math Operators
const currentYear = 2022;
const agePeter = currentYear - 1994;
const ageTaylor = currentYear - 1993;
console.log(agePeter, ageTaylor);

console.log(agePeter * 2, agePeter / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Peter';
const lastName = 'Nikolov';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison Operators <, >, <=, >=
console.log(agePeter > ageTaylor);
console.log(agePeter < ageTaylor);
console.log(ageTaylor >= 18);
console.log(agePeter <= 29);

const isFullAge = agePeter >= 19;

console.log(currentYear - 1994 > currentYear - 2022);


const currentYear = 2022;
const agePeter = currentYear - 1994;
const ageTaylor = currentYear - 1993;

console.log(currentYear - 1994 > currentYear - 2022);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (agePeter + ageTaylor) / 2
console.log(agePeter, ageTaylor, averageAge);


const firstName = 'Peter';
const job = 'Coder';
const birthYear = 1994;
const year = 2022;

const peter = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(peter);

const peterNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(peterNew); // Preferred, interpolation in C#. 

console.log(`Hello, I'm Peter Nikolov. A 28 year old coder.`);

console.log(`String
Multiple
Lines`);


const age = 15;

if (age >= 18) {
    console.log('Peter can start driving license 🙌');
} else {
    const yearsLeft = 18 - age;
    console.log(`Peter is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1994;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


// Type Conversion
const inputYear = '1994';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Peter'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 4);

let n = '1' + 1;
n = n - 1;
console.log(n);


// Truthy and Falsy Values 
// 5 Falsy Values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Peter'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job.')
}

let height = 12.0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');
}

console.log(typeof(height));


// Equality Operators
// === is Strict equality operator, does not perform type coercion 
// == is Loose equality operator, does perform type coercion

const age = 18;
if (age === 18) console.log('You are 18 (strict)');
if (age == 18) console.log('You are 18 (loose)');

const favoriteNumber = Number(prompt("What's your favorite number?"));
console.log(favoriteNumber);
console.log(typeof favoriteNumber);

if (favoriteNumber === 23) { // 23 == 23
    console.log('Cool! 23 sucks.');
} else if (favoriteNumber === 7) {
    console.log('7 is also a cool number');
} else if (favoriteNumber === 9) {
    console.log('9 is cool')
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favoriteNumber !== 23) console.log('Why not 23?');
*/

// Boolean Logic
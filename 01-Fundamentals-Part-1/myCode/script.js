//////////////////////////////////////////////////////////////////////////////////////////////
/*
//Values & Varables
//values example:
console.log('Jonas');
console.log(23);

// variable example:
// let firstName = 'Jonas';
// console.log(firstName)

//good example of variable names
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

//bad example of variable names
let job1 = 'Programmer';
let job2 = 'Teacher';

//Practice Value and Variables
let country = 'United States';
let continent = 'North America';
let population = 10000000;

console.log(country);
console.log(continent);
console.log(population);

*/

//////////////////////////////////////////////////////////////////////////////////////////////

/*value --> Obejct or Primitive
    7 Data types
        Numbers : Floating point numbers --> used for decimal intergeres
            let age - 23;
        String: Sequence of characters --> used for texts
            let firstName = 'jonas';
        Boolean: Logical types that can be true or false --> used for taking decisions
                let fullAge = true;
        Undefined: Value taken by a variable that is not yet defined ('empty value')
                let children;
        Null: Also means 'empty value'
        Symbol (ES2015): Value that is unique and cannot be cahgned (Not useful for now)
        BigInt (ES2020): larger intergers than the number type can hold
    JavaScript ahs a dynamic typing> We do not have to manually define the data type of the value stored in a variable. Instead data types are determined automatically
        Value has type, NOT variable
*/

/*
//Boolean
true;
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//operator
console.log(typeof true); //boolean
console.log(typeof javaScriptIsFun); //boolean
console.log(typeof 23); //number
console.log(typeof 'Jonas'); //string

//changed the value in the variable above
javaScriptIsFun = 'YES';
console.log(javaScriptIsFun);

//undefine: 'empty value'
let year;
console.log(year);
console.log(typeof year);

//giving an undefined variable a value
year = 1991;
console.log(year);

//a bug error in JavaScript
console.log(typeof null); //retuns as object instead of null

// Practice for Data Types:
let isIsland = 'United States';
console.log(isIsland);
isIsland = true;
console.log(isIsland);
let language;
console.log(isIsland, population, country, language);
console.log(typeof isIsland, typeof population, typeof country, typeof language);


*/
//////////////////////////////////////////////////////////////////////////////////////////////
/*
//let, const, and var
//let --> allows to mutate data / value
//should only use if you know if value is going to change
let age = 30;
age = 31;

//const --> value can NOT be changed
//this should be the default for coding
const birthYear = 1991;
// birthYear = 1996;
// console.log(birthYear); --> this will read as an error

// const job;
// console.log(job); --> no value is given, therefore will not work.

var job = 'programmer';
job = 'teacher';

// lastName = 'Surio';
// console.log(lastName);
// console.log(job); looks similar as 'let', but is significantly different
//should always define a variable properly : let, var, or const
//highly not recommended to use var

//Let, Const, and Var Practice:
const language = 'English';
// language = 'tagalog';
// console.log(language); --> doesn't work because value can NOT be changed
var homeCountry = 'United States';
console.log(homeCountry);
homeCountry = 'Philippines';
console.log(homeCountry); // Can be updated and redeclared
let profession = 'Sous Chef';
console.log(profession);
profession = 'Programmer'
console.log(profession); // can be updated
// let profession = 'Programmer'; --> can NOT be redeclared
*/
//////////////////////////////////////////////////////////////////////////////////////////////
/*
//Basic Operators:
const now = 2037;
const ageJonas = now - 1996;
const ageSarah = now - 1997;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 --> 2 * 2 *2

const firstName = 'Marc';
const lastName = 'Surio';
console.log(firstName + ' ' + lastName); // --> needs to have an empty string in between to space out the names otherwise it would end up as MarcSurio instead of Marc Surio

//assignment operator:
let x = 10 + 5;
console.log(x);
//the addition '+' is executed first before the '=' operator

x += 10; // x = x + 20 --> 15 + 10 = 25
console.log(x);

x *= 4; // x = x * 4 --> 25 * 4 = 100
console.log(x);

x++; // x = x + 1 --> 100 + 1 = 101
console.log(x);

x--; // x = x - 1 --> 101 - 1 = 100
console.log(x);

//comparison operators: >, <, >=, <=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18); // greater than or equal to 18

const isFullAge = ageSarah >= 18;
console.log(now - 1996 > now - 1995);
//Basic Operator Practice:
let population = 10000000 //using let because the value is constantly changing and is not a permanent value
console.log(population / 2);
population++;
console.log(population);

const finlandPopulation = 6000000;
if (population > finlandPopulation) {
    console.log(true, 'Your country population has more than Finland');
} else { console.log(false, 'Your country population is less than Finland'); }

const averagePopulation = 33000000;
if (population > averagePopulation) {
    console.log(true, 'Your country population is higher than the average population');
} else { console.log(false, 'Your country population is less than the average population'); }

let description;
const continent = 'Europe';
const country = 'Portugal';
population = 11000000;
let language = 'Portugese';
description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);
*/
//////////////////////////////////////////////////////////////////////////////////////////////
/*
//Operator Precedence:
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
//look at MDM Precedence Operator to understand how JavaScript understand what goes first
//the '>' and '<' has a lower precedence than the math operators

// console.log(25 - 10 - 5);
//left to right operation

let x, y;
x = y = 25 - 10 - 5; //x = y = 10 -> y = 10, x = 10 -> 10, 10
console.log(x, y);
//right to left operation

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
//follows PEMDAS, without the parenthesis, ageSarah / 2 takes precedence first.
*/
//////////////////////////////////////////////////////////////////////////////////////////////

//Coding Challenge 1:
let markMass, johnMass, markHeight, johnHeight;
let markBMI, johnBMI;
//using let because the values will change based on dataset

//Data Set 1:
markMass = 78;
markHeight = 1.69;
markBMI = markMass / markHeight ** 2; // mass divided by height to the power of 2 -> mass / (heght*height)
console.log(markBMI);

johnMass = 92;
johnHeight = 1.95;
johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);


//Data Set 2:
markMass = 95;
markHeight = 1.88;
markBMI = markMass / markHeight ** 2;
console.log(markBMI);

johnMass = 85;
johnHeight = 1.76;
johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);
//////////////////////////////////////////////////////////////////////////////////////////////
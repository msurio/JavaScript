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
/*
//Coding Challenge 1:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.


//data set 1:
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

//data set 2:
const markHigherMass = 95;
const markHigherHeight = 1.95;
const johnLowerMass = 85;
const johnLowerHeight = 1.76;

const markBMI = markMass / markHeight ** 2
const johnBMI = johnMass / johnHeight ** 2
console.log(markBMI, johnBMI);

const markNewBMI = markHigherMass / markHigherHeight ** 2;
const johnNewBMI = johnLowerMass / johnLowerHeight ** 2;
console.log(markNewBMI, johnNewBMI);

//boolean variable:
const markHigherBMI = markNewBMI > johnNewBMI;
console.log(markHigherBMI);
*/
//////////////////////////////////////////////////////////////////////////////////////////////

//string & template literals
/*
const firstName = 'Marc';
const job = 'Programmer';
const birthYear = 1996;
const currentYear = 2023;

const marc = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
console.log(marc);

//the template literal format:
const marcNew = `I'm ${firstName} a ${currentYear - birthYear} year old ${job}!`;
console.log(marcNew);

console.log(`Just a regular string...`);

console.log(`String with \n\ multiple \n\ lines`);
// \n = new line

console.log(`string
multiple
lines`);
//another way to create multi-line strigs.

//String & Template Literal Practice:
let description;
const continent = 'Europe';
const country = 'Portugal';
population = 11000000;
let language = 'Portugese';
description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);

//the template literal version:
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
*/
//////////////////////////////////////////////////////////////////////////////////////////////

//Taking Decisions: If/Else Statements:
/*
const age = 15;

if(age >= 18){
    console.log('Sarah can start driving license 😃');
    //windows + . creates the emoji popup window
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😢`);
}

const birthYear = 1996;
let century;

if(birthYear <= 2000){
     century = 20;
}else{
     century = 21;
}

console.log(century);

//If/Else Statement practice:

1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)

2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original


// const population = 11;
const population = 13;
// const population = 130;

if (population > 33){
    console.log("Porutal population is above average")
}else{
    const averagePopulation = 33
    console.log(`Portugal's population is ${averagePopulation - population} million below average`);
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////
/*
//Coding Challenge #2:

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);
console.log(BMIMark, BMIJohn);

console.log('Who has the higher BMI? Mark or John?')

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
}else{
    console.log(`John's (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////

//Type Conversion & Coercion:
/*
//type conversion:
const inputYear = '1996'
console.log(Number(inputYear), inputYear); //turns string into a numerical value
console.log(inputYear + 18);
console.log(Number(inputYear) + 18)

console.log(Number('Marc')); //produces NaN (Not a Number);
console.log(typeof NaN); //Number / type of number

console.log(String(23), 23); //turns a numerical value into a string

//JavaScript allows conversion to a number, string, or boolean.

//type coercion:
    //dealing with values with different types
console.log('I am ' + 23 + ' years old'); //number converted into a string
console.log('I am ' + '23' + ' years old'); //the literal translation of what JavaScript does to the example above

console.log('23' - '10' - 3); //converted strings into numerical values due to the minus operator

console.log('23' + '10' + 3); //the + operator turns all numerical values into a string

console.log('23' / '2', '23' * '2'); //the / and * operator automatically converts to numerical value because that is the only way that it would work.

let n = '1' + 1; //console.log results in  a string of 11
n = n - 1; // converts the string above into a number which results into 10
console.log(n);

console.log(2+3+4+'5'); //console.log(95) numerical value of 9 and a string of 5 --> 95

console.log('10' - '4' - '3' - 2 +'5'); //console.log(15) --> numerical value is 1 and a string of 5 --> 15

// Type Conversion and Coercion Practice:
// Predict the result of these 5 operations without executing them:
// '9' - '5'; --> 4
// '19' - '13' + '17'; --> 617
// '19' - '13' + 17; --> 23
// '123' < 57; --> false
// 5 + 6 + '4' + 9 - 4 - 2; --> 1143
// 2. Execute the operations to check if you were right

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/
//////////////////////////////////////////////////////////////////////////////////////////////


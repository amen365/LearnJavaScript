/*convert human years to dog years program*/

//Updated Program
const myAge = 25;
let earlyYears =2;
earlyYears = earlyYears*10.5;
let laterYears = myAge -2;
//since we already accounted for the first 2 years
laterYears = laterYears*4;
let myAgeInDogYears = earlyYears+laterYears
//combine both sets of numbers to get total
let myName = 'Aman'.toLowerCase();
console.log(`My name is ${myName}. I am a ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

/* convert kelvin to celsius then to fahrenheit */

const kelvin = 293;
//const means it will stay the same value and be unable to be reassigned
console.log(kelvin);
let celsius = kelvin - 273;
//celcius is kelvin (already determinded) - 273
//console.log(celsius); -> check celsius
let fahrenheit = celsius * (9/5) + 32;
//formula was given
fahrenheit = Math.floor(fahrenheit);
//this will round down the temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

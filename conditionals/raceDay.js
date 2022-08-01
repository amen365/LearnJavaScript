//Race day registration program

let raceNumber = Math.floor(Math.random() * 1000);

const earlyAdults = true;

if (runnerAge > 18 && earlyAdults ===true) {
  console.log('The runner is an adult and early.');
  raceNumber += 1000
}

if (runnerAge > 18 && earlyAdults ===true) {
  console.log(`You will race at 9:30 am. Your number is ${raceNumber}.`);
} else if (runnerAge >= 18 && earlyAdults !== true) {
  console.log(`The runner is over 18 AND did not register early so they will race at 11:00 am. Your number is ${raceNumber}.`);
} else if (runnerAge< 18) {
  console.log(`Race will start for you at 12:30 pm. Your number is ${raceNumber}.`);
} else {
  console.log(`Please see the registration desk.`)
}

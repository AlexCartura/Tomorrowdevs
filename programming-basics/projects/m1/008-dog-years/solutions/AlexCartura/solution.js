let babyAge;
let babyYears;
let adultAge;
let humanYears;
let adultYears;


humanYears = prompt("How many human years do you wnat to convert in dog years?")

if (humanYears < 0) {
    alert("Error, this is not valid! ")
} else {

adultYears = Math.max(0, adultYears);
adultYears = (humanYears - 2)

adultAge = adultYears*4;

babyYears = (humanYears - adultYears);
babyAge = (babyYears * 10.5)

alert( `Your're dog have ${+(adultAge + babyAge).toFixed(1)} years old.` )
}
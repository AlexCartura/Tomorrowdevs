/* UNITS OF TIME
Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. Compute and display the total number of seconds represented by this duration.
*/

const SecInMin = 60;
const MinInHrs = SecInMin * 60;
const HrsInDay = MinInHrs * 24;

let Days = prompt("Hown many days?");
let Hours = prompt("Hown many hours?");
let Minutes = prompt("Hown many minutes?");

let totalSeconds = (Minutes * SecInMin) + (Hours * MinInHrs) + (Days * HrsInDay);
alert("The total seconds is " + totalSeconds )
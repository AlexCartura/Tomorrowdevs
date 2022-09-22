const days = 86400;
const hours = 3600;
const minutes = 60;
const second = 60;

const seconds = prompt("How many seconds do you want to convert? ")

let day_ris = parseInt(seconds / days);
const day_mod = seconds % days;

let hours_ris = parseInt(day_mod/hours);
const hours_mod = day_mod%hours;

let minutes_ris = parseInt(hours_mod/minutes);
const minutes_mod = hours_mod%minutes;

let second_ris = parseInt(minutes_mod/second);

if (day_ris < 10) {
    day_ris = "0"+ day_ris
}
if (hours_ris < 10) {
    hours_ris = "0"+ hours_ris
}
if (minutes_ris < 10) {
    minutes_ris = "0"+ minutes_ris
}
if (second_ris < 10) {
    second_ris = "0"+ second_ris
}

alert("the time is " + day_ris +":"+hours_ris+":"+minutes_ris+":"+second_ris)
const days = 86400;
const hours = 3600;
const minutes = 60;
const second = 60;

const seconds = prompt("How many seconds do you want to convert? ")

const day_ris = parseInt(seconds / days);
const day_mod = seconds % days;

const hours_ris = parseInt(day_mod/hours);
const hours_mod = day_mod%hours;

const minutes_ris = parseInt(hours_mod/minutes);
const minutes_mod = hours_mod%minutes;

const second_ris = parseInt(minutes_mod/second)

alert("the time is " + day_ris +":"+hours_ris+":"+minutes_ris+":"+second_ris)
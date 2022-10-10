let userInser = prompt("Insert a note here! ");
userInser = userInser.toUpperCase();


//Assegno i valori di note e frequenze rispettive in due array

const notes = ["c4", "d4", "e4", "f4", "g4", "a4", "b4"];
const frequency = ["261.63", "293.66", "329.63", "349.23", "392.00", "440.00", "493.88"];


//Inserisco un test per la verifica del testo
let validUser = /^[A-G][0-8]$/.test(userInser);

let letterNote;
let numberNote;

// Separo la lettera ed il numero in due variabili separate
if (validUser) {
    letterNote = userInser.slice(0,1);
    numberNote = userInser.slice(1,2);
} else {
    alert("this is not a note")
}

let freq;

if (letterNote == "C") {
    freq = (261.63/(Math.pow(2, 4-numberNote))).toFixed(2);
    alert(freq + " Hz");
} else if (letterNote == "D") {
    freq = (293.66 / (Math.pow(2, 4-numberNote))).toFixed(2); 
    alert(freq + " Hz");
} else if (letterNote == "E") {
    freq = (329.63/(Math.pow(2, 4-numberNote))).toFixed(2); 
    alert(freq + " Hz");
} else if (letterNote == "F") {
    freq = (349.23/(Math.pow(2, 4-numberNote))).toFixed(2); 
    alert(freq + " Hz");
} else if (letterNote == "G") {
    freq = (392.00/(Math.pow(2, 4-numberNote))).toFixed(2); 
    alert(freq + " Hz");
} else if (letterNote == "A") {
    freq = (440.00/(Math.pow(2, 4-numberNote))).toFixed(2); 
    alert(freq + " Hz");
} else if (letterNote == "B") {
    freq = (493.88/(Math.pow(2, 4-numberNote))).toFixed(2); 
    alert(freq + " Hz");
}
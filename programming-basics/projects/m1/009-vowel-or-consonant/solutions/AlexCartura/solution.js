let vowel;

vowel = prompt("which letter do you want to insert?");

vowel = vowel.toLowerCase;

if (vowel){
    switch(vowel) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        alert("This is a vowel!");
        break;
        case "y":
        alert("This letter is a vowel anc sometimes is a consonant ")
        break;
        default:
        alert("This letter is a consonant")
    }; 
    
} else {
    alert("This is not a vowel or consonant");
}
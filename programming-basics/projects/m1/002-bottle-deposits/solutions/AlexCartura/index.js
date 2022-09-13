var numInitBottle = prompt("Buongiorno, quante bottiglie deve buttare?");
var moreThen1ltbottle = prompt("Ok ottimo! Di quest'ultime quante sono da capacità di un litro o meno?");

var noMoreThen1ltbottle = (numInitBottle - moreThen1ltbottle);

var cashFor1ltBottle = (0.10 * noMoreThen1ltbottle);
var cashFormore1ltBottle = (0.25 * moreThen1ltbottle);
var totalCashBottle = (cashFor1ltBottle + cashFormore1ltBottle);

var ricompensa = prompt("Ottimo la tua ricompensa per le tue bottiglie è di un totale di $" + totalCashBottle + " hai altre bottiglie da aggiungere? (rispondi con si o no) ");

if (ricompensa = "si") {
    var nuovogiro = prompt("Quante bottiglie devi aggiungere?")
};

var newnumInit1ltBottle = prompt ("Quante bottiglie da 1lt devi aggiungere? ");

var newnumemorethan1ltBottle = prompt("E quante da piu di 1lt? ");

var conversion1 = (newnumInit1ltBottle * 0.10);
var conversion2 = (newnumemorethan1ltBottle * 0.25);

var newTotalCash = (conversion1+conversion2);
var endTotal = (totalCashBottle+ newTotalCash);

alert("La tua ricompensa finale è di $ " + endTotal)
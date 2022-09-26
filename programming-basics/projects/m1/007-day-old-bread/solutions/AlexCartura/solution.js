const bread = prompt("Buongiorno, oggi il prezzo del pane è di €3,49 ma con il 60% di sconto, quanti pezzi vorrebbe acquistare?")

let priceBread = bread * 3.49;
let discount = (priceBread * 60)/100;
let disPrice = priceBread - discount;

priceBread = priceBread.toFixed(2);
discount = discount.toFixed(2);
disPrice = disPrice.toFixed(2);

alert("Prezzo iniziale " + priceBread + "\n" + "importo da detrarre " + discount+ "\n" + "importo finale " + disPrice )
//MAKING CHANGE

//Consider the software that runs on a self-checkout machine. One task that it must be able to perform is to determine how much change to provide when the shopper pays for a purchase with cash. Write a program that begins by reading a number of cents from the user as an integer. Then your program should compute and display the denominations of the coins that should be used to give that amount of change to the shopper. The change should be given using as few coins as possible. Assume that the machine is loaded with pennies, nickels, dimes, quarters, loonies and toonies.

var Toonie = 200;
var Loonie = 100;
var Quarter = 25;
var Dime = 10;
var Nickel = 5;


var insertCoins = prompt("How many dollars do you have to change?");
var Coin = insertCoins * 100;
var resToonies = Coin % Toonie; //resto Toonie
var risToonies = parseInt(Coin/Toonie); 

var resLoonie = resToonies % Loonie; //resto di Toonie con Loonie
var risLoonie = parseInt(resToonies/Loonie); 

var resQuarter = resLoonie % Quarter; //resto di Loonie con Quarter
var risQuarter = parseInt(resLoonie/Quarter);

var resDime = resQuarter % Dime; //resto di Qaurter con Dime
var risDime = parseInt(resQuarter/Dime);

var resNickel = resDime % Nickel; //resto di Dime con Nickel
var risNickel = parseInt(resDime/Nickel);

alert("Your remainder will be of " + risToonies + " Toonies, " + risLoonie + " Loonies, " + risQuarter + " Quarter, " + risDime + " Dime and " + risNickel + " Nickel")
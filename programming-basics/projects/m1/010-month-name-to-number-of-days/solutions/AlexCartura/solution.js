let date = new Date();
let year = date.getFullYear();

let month = prompt("insert a month here!")
month = month.toLocaleLowerCase;

switch(month) {

    case "november":
    case "april":
    case "june":
    case "september":
    alert("30 days");
    break;
    
    case "january":
    case "march":
    case "maj":
    case "july":
    case "august":
    case "october":
    case "december":
    alert("31 days");
    break;

    case "february":
        if (year%400==0) {
            alert("29 days")
        } else if (year%4 == 0 && year % 100 != 0){
            alert("28 days")
        }
    break

    default:
        alert("this is not a month!")

}
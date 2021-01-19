/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function ()
{

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let myDate = ""
    let currentDate = new Date();

    console.log(currentDate.getDay() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear());

    //Define which day of the week it is
    switch (currentDate.getDay() % 7) {
        case(0):
            myDate += "Sunday";
            break;
        case(1):
            myDate += "Monday";
            break;
        case(2):
            myDate += "Tuesday";
            break;
        case(3):
            myDate += "Wednesday";
            break;
        case(4):
            myDate += "Thursday";
            break;
        case(5):
            myDate += "Friday";
            break;
        case(6):
            myDate += "Saturday";
            break;
        default:
            myDate += "Blunderday";

    }

    //Add date of the day

    myDate += " " + currentDate.getDate();

    //Add name of the month

    switch (currentDate.getMonth()) {
        case(0):
            myDate += " January"
            break;
        case(1):
            myDate += " February"
            break;
        case(2):
            myDate += " March"
            break;
        case(3):
            myDate += " April"
            break;
        case(4):
            myDate += " May"
            break;
        case(5):
            myDate += " June"
            break;
        case(6):
            myDate += " Juli"
            break;
        case(7):
            myDate += " August"
            break;
        case(8):
            myDate += " September"
            break;
        case(9):
            myDate += " October"
            break;
        case(10):
            myDate += " November"
            break;
        case(11):
            myDate += " December"
            break;
        default:
            myDate += " Failtober"
    }

    //add year

    myDate += " " + currentDate.getFullYear();

    //add hour + minutes

    myDate += ", " + currentDate.getHours() + "h" + currentDate.getMinutes();



document.getElementById("target").innerHTML = myDate;

})
();

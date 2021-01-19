/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function ()
{
    let displayEl = document.getElementById("displaySection"); //define the element which will display the outcome
    let runButtonEl = document.getElementById("run");
    let yearInputEl = document.getElementById("year");


    runButtonEl.addEventListener("click", () =>
    {
        let outputText = "";
        let spookyDates = [];

        //create date element for year
        let newDate = new Date(parseInt(yearInputEl.value), 1, 0);
        console.log("test: " + newDate.getFullYear());

        //next, for every month, check if the 13th of that month is a friday
        //if it is, put the date into an array.
        for (let i = 0; i < 12; i++) {
            let indexDate = new Date(newDate.getFullYear(), i, 13);
            if (indexDate.getDay() % 7 === 5) {
                spookyDates.push(indexDate);
                console.log(indexDate.getMonth() + 1 + " ")
                //outputText += indexDate.getFullYear() + "/" + indexDate.getMonth() + "/" + indexDate.getDate() + "\n";
            }
        }

        //with the months of the year parsed and the spooky ones found out, we can now create a loop to write out the dates.
        //it might not be the most optimal solution but hey, a bit of extra array practice can't hurt.

        //outputText = "<p>"
        for (let i = 0; i < spookyDates.length; i++) {

            //copied the month switch from the previous exercise. It works fine.
            switch (spookyDates[i].getMonth()) {
                case(0):
                    outputText += " January "
                    break;
                case(1):
                    outputText += " February "
                    break;
                case(2):
                    outputText += " March "
                    break;
                case(3):
                    outputText += " April "
                    break;
                case(4):
                    outputText += " May "
                    break;
                case(5):
                    outputText += " June "
                    break;
                case(6):
                    outputText += " Juli "
                    break;
                case(7):
                    outputText += " August "
                    break;
                case(8):
                    outputText += " September "
                    break;
                case(9):
                    outputText += " October "
                    break;
                case(10):
                    outputText += " November "
                    break;
                case(11):
                    outputText += " December "
                    break;
                default:
                    outputText += " Failtober "
            }
            if(i < spookyDates.length - 1)
            {
                outputText +="and"
            }
            else{outputText +="."}
        }
        //outputText += "</p>"
        displayEl.innerHTML = outputText

    });

})();

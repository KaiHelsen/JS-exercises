/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function ()
{

    let currentDate = new Date();

    document.getElementById("run").addEventListener("click", () =>
    {
        //get input date and put into new Date object
        let bDay = document.getElementById("dob-day").value;
        let bMonth = document.getElementById("dob-month").value;
        let bYear = document.getElementById("dob-year").value;
        let bDate = new Date();
        bDate.setFullYear(bYear, bMonth, bDay);

        //calculate difference between two dates
        let difference = currentDate.getTime() - bDate.getTime();

        //difference between dates is in milliseconds. this calculation brings brings it back to seconds, minutes, hours, days, and finally years.
        //365.25 roughly accounts for leap years (1/4 days every year)
        difference /= (1000 * 60 * 60 * 24 * 365.25);
        difference = Math.floor(difference);
        console.log(difference);

        //display age of the visitor

        document.getElementById("run").innerHTML = "" + difference + " years.";
        // your code here
    });


})();

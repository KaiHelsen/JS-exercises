/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let message = "";
    let currentDate = new Date();
    if(currentDate.getHours() >= 18)
    {
        message = "Good evening!"
    }
    else{
        message = "Hello!"
    }

    document.getElementById("target").innerHTML = message;

})();

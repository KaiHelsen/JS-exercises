/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById("target");
    let table = ""

    table += "<table>"
    for(let i = 0; i < 10; i++)
    {
        if(i < 1)
        {
            table += "<tr><th>" + i + "</th></tr>"
        }
        else
        {
            table += "<tr><td>" + i + "</td></tr>"
        }

    }
    table +="</table>";

    target.innerHTML = table;

})();

/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function ()
{

    // your code here
    let target = document.getElementById("target");

    target.innerHTML = createTable(10, 10);

    function createTable(columns, rows) {
        let table = "<table>"
        for (let i = 0; i < rows; i++) {
            table += "<tr>";
            for (let j = 0; j <= columns; j++) {
                table += "<td>" + (i + 1) * (j) + "</td>";
            }
            table += "</tr>";
        }

        table += "</table>";

        return table;
    }

})();

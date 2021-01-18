/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {

        // your code here
        var output = "";
        var isRunning = true;

        for (let i = 0; i < 21; i++)
        {
            var result = Math.pow(i,2);

            //if i to the power of 2 is over 21, break loop.
            if (result >= 21)
            {
                break;
            }
            else
                {
                output += "" + result + "\n";
            }
        }

        alert(output);

    });

})();

/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function ()
{

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", cleanUp);

    function cleanUp() {
        let uniqueFruits = [];

        fruits.forEach(function (item)
        {
            if (!uniqueFruits.includes(item))
            {
                uniqueFruits.push(item);
                console.log("blip!");
            }
        });

        console.log(uniqueFruits);
    }

    // your code here

})();

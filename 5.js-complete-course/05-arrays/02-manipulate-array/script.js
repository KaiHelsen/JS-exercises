/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function ()
{

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", sort);

    function sort() {
        //remove first and last elements
        fruits.splice(0, 1);
        fruits.splice(-1, 1);

        //add new first and last elements
        fruits.splice(0, 0, "banana");
        fruits.push("kiwi");

        console.log(fruits);
    }

    // your code here

})();

/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function ()
{
    let smallestDsp = document.getElementById("min");
    let largestDsp = document.getElementById("max");
    let sumDsp = document.getElementById("sum");
    let averageDsp = document.getElementById("average");

    let randArray = generateArray(10);

    // your code here
    function generateArray(length) {
        let tempArray = [];
        for (let i = 0; i < 10; i++) {
            tempArray.push(Math.floor(Math.random() * 99) + 1);
        }
        console.log(tempArray);
        return tempArray;
    };

    document.getElementById("run").addEventListener("click", () =>
    {
        let smallest = 100;
        let largest = 0;
        let sum = 0;
        let avg = 0;

        //iterate through array
        randArray.forEach(function(number)
        {
            if(number >= largest){largest = number;}
            if(number < smallest){smallest = number;}

            sum += number;
        });
        avg = Math.floor(sum / (randArray.length + 1));

        //display numbers
        smallestDsp.innerHTML = "" + smallest;
        largestDsp.innerHTML = "" + largest;
        sumDsp.innerHTML = "" + sum;
        averageDsp.innerHTML = "" + avg;

    });

})();

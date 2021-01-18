/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function () {

        // your code here
        //first, take in input and convert to int array
        var output = "";
        var input = document.getElementById("numbers").value;
        let count = input.split(", ");

        for (let i = 0; i < count.length; i++) {
            count[i] = parseInt(count[i]);
            // output += count[i] + "\n";
        }

        //next, sort array
        //let's try implementing a bubble sort

        var isSorting = true;
        //array is sorted when loop is completed but no numbers are moved

        //by using a do-while loop, we guarantee that the sorting algorithm is run at least once
        //
        do
        {
            //set isSorting to false at the start of each iteration
            isSorting = false;
            for (let i = 0; i < (count.length - 1); i++) {
                let currentIndex = count[i];
                let nextIndex = count[i+1];

                //if the first number is higher than the number behind it, switch them around
                //otherwise, they are already properly sorted
                if(currentIndex > nextIndex)
                {
                    count[i] = nextIndex;
                    count[i+1] = currentIndex;

                    //the numbers have moved, therefore the function is still sorting.
                    isSorting = true;
                }
            }
        }
        while(isSorting)

        for (let i = 0; i < count.length; i++) {
            output += count[i] + "\n";
        }
        alert(output);

    });

})();

/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    let buttonArray = []; //this array will contain all necessary information for the UI buttons and their values;
    let display = document.getElementById("target");

    //initialize array based on buttons in HTML
    document.querySelectorAll("button").forEach(function(button){
        buttonArray.push(button);
        //Add listener to button

        button.addEventListener("click", () =>
        {
            console.log("pushed " + button.id);
            let myValue = parseInt(button.innerText);
            let minValue = parseInt(button.dataset.min);
            let maxValue = parseInt(button.dataset.max);

            button.innerText = increaseValue(myValue, minValue, maxValue).toString();

            updateDisplay()

        });
    });

    //check if array has been properly initialized
    console.log(buttonArray);

    // your code here
    function increaseValue(value, min, max){
        let endValue = 0;
        if(value >= max){ endValue = min}
        else{endValue = value + 1}

        if(endValue < 10){endValue = "0" + endValue;}
        else{endValue.toString();}

        console.log(endValue);

        return endValue;
    }

    function updateDisplay(){
        let number = "+"
        buttonArray.forEach(function(button){
            number += button.innerText;
        })

        display.innerText = number;
    };

})();

/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let buttons = [];
    let displays = [];

    let target = document.getElementById("target");

    document.querySelectorAll("input").forEach(function(display){
        displays.push(display);
    });

    document.querySelectorAll("button").forEach(function(button, i){
       buttons.push(button);
       button.addEventListener("click", function(){
           let content = random(parseInt(displays[i].dataset.min), parseInt(displays[i].dataset.max));
           displays[i].value = content;
           UpdateDisplay();
       });
    });

    console.log(displays);
    console.log(buttons);

    function random(min, max)
    {
        console.log("roll!");
        return Math.floor(Math.random() * (max - min) + min);
    }

    function UpdateDisplay(){
        let targetText = "+"
        displays.forEach(function(display){
            targetText += display.value;
        });

        target.innerText = targetText;
    }

})();

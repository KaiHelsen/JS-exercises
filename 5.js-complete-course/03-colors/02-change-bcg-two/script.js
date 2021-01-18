/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function()
    {

        let colorInput = document.getElementById("color").value;
        colorInput = colorInput.toLowerCase();

        switch(colorInput){
            case("red"):
                document.body.style.backgroundColor = "#760404";
                break;
            case("green"):
                document.body.style.backgroundColor = "#157110";
                break;
            case("blue"):
                document.body.style.backgroundColor = "#0c74dc";
                break;
            case("yellow"):
                document.body.style.backgroundColor = "#eeb605";
                break;
            case("purple"):
                document.body.style.backgroundColor = "#5415b3";
                break;
            case("orange"):
                document.body.style.backgroundColor = "#d75808";
                break;
            case("black"):
                document.body.style.backgroundColor = "#151515";
                break;
            default:
                alert("color not recognized!");
                break;
            }


    });

})();

/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function()
{
    // to get the value of an input: document.getElementById("element-id").value

    //function takes button ID parameter
    var performOperation = function(buttonId) {
        // perform the operation

        //for convenience's sake, put input into their own variables
        var firstInput = parseInt(document.getElementById("op-one").value);
        var secondInput = parseInt(document.getElementById("op-two").value);
        var result = 0;

        //switch statement for better button usage
        switch(buttonId){
            case("addition"):
                result = firstInput + secondInput;
                break;
            case("subtraction"):
                result = firstInput - secondInput;
                break;
            case("multiplication"):
                result = firstInput * secondInput;
                break;
            case("division"):
                result = firstInput / secondInput;
                break;
        }

        //return result
        alert(result);

    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();

/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function ()
{

    let dialogue = document.getElementById("dialogue");
    let input = document.getElementById("player-guess");
    let button = document.getElementById("run");

    let number = Math.floor(Math.random() * 100);
    console.log(number);
    let guesses = 0;

    button.addEventListener("click", function ()
        {
            guesses++;

            if (input.value == number) {

                //return a different string based on the amount of guesses. This is just to handle the plural of guess - guesses.
                if (guesses == 1) {
                    dialogue.innerText = "Congratulations! You found the right number with only " + guesses + " guess!";
                }
                else {
                    dialogue.innerText = "Congratulations! You found the right number with only " + guesses + " guesses!";
                }

            }
            else if (input.value > number) {
                dialogue.innerText = "try lower.";
            }
            else {
                dialogue.innerText = "try higher.";
            }
        }
    )


    // your code here

})();

/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function ()
{

    let target = document.getElementById("target");
    let text = target.innerHTML;
    let endText = "";
    target.innerHTML = "";

    let delay = 0;

    function typewriter(counter){

    }

    for (let i = 0; i < text.length; i++)
    {
        //generate random delay between 20 and 100 ms
        delay += Math.random() * 80 + 20;

        console.log("running typewriter");
        setTimeout(function ()
        {
            endText += text.charAt(i);
            target.innerHTML = endText;
        }, delay);
    };


    // your code here

})();

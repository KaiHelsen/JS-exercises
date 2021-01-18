/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function()
    {
        //let's disassemble this to figure out what exactly is going on
        //starting with the hashtag, we define this as a hex color
        //next, math.random generates a random float between 0 and 1.
        //by multiplying by 16777215 we essentially multiply by 0xffffff, or hexadecimal "white"
        //toString radix guarantees we are working within base 16, or within hexadecimal values.
        //Math.Floor means we don't get any decimal values.

        //essentially we generate a number between 0x000000 and 0xffffff, instead of generating the three different colour channels separately.
        var color = "#" + Math.floor(Math.random()*16777215).toString(16);

        //log color for easy checks
        console.log("" + color);
        document.body.style.backgroundColor = color;
    });

    // your code here

})();

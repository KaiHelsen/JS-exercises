/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function ()
{

    // your code here
    let timeIndex = 0;
    let target = document.getElementById("target")
    let text = target.innerHTML;

    let defaultFontSize = 3;

    setInterval(wave, 10);

    function wave(){
        target.innerHTML = ""
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            let char = text.charAt(i);
            let textSize = Math.round(Math.sin(i / 3 + timeIndex * .1) * 4 + 4);

            // char = char.fontsize(Math.round(Math.random() * 5) + 2);
            char = char.fontsize(textSize);
            newText += char;

        }

        target.innerHTML = newText;
        timeIndex++;
    }

    // console.log(text);

})();

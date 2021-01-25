/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let password = document.getElementById("pass-one");
    let counter = document.getElementById("counter");

    password.addEventListener("input", update);

    function update()
    {
        let passInput = password.value;
        let count = passInput.length;

        if(count > 9)
        {
            passInput = passInput.substring(0,9);
            password.value = passInput;
        }

        counter.innerHTML = count + "/10";
    }

})();

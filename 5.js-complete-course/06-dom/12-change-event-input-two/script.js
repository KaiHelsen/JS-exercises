/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let password = document.getElementById("pass-one");
    let validitySpan = document.getElementById("validity");

    password.addEventListener("input", validate);

    function validate(){
        let passwordInput = password.value;
        let numbers = passwordInput.match(/\d+/)
        console.log(numbers);
        if(numbers !== null && numbers > 9 && passwordInput.length >= 8)
        {
            validitySpan.innerHTML = "Ok"
        }
        else{
            validitySpan.innerHTML = "Not ok";
        }
    };
    // your code here

})();

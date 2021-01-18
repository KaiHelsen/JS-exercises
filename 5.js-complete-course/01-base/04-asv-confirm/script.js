/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function() {
let isInformationCorrect = false;
while(!isInformationCorrect) {

    // your code here
    let age = prompt("What is your age?");
    let gender = prompt("What is your gender?");
    let location = prompt("What town do you live in?");

    if(confirm("You are " + age + "years old. \n You are a " + gender + ".\n You live in " + location + ".\n \n Is this correct?"))
    {
        isInformationCorrect = true;
    }
}

})();

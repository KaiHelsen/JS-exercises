/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //define local storage
    let myStorage = window.localStorage;
    if(!myStorage.clickCount)
    {
        myStorage.clickCount = Number(0);
    }

    let increment = document.getElementById("increment");
    let reset = document.getElementById("reset");
    let counter = document.getElementById("target");

    //initialize counter
    counter.innerText = myStorage.clickCount;

    increment.addEventListener("click", ()=>{
        if(!myStorage.clickCount)
        {
            myStorage.clickCount = Number(0);
        }
        myStorage.clickCount++;
        counter.innerText = myStorage.clickCount;

    })

    reset.addEventListener("click", ()=>{
        myStorage.removeItem("clickCount");
        counter.innerText = "counter has been cleared from local storage!"
    })
    // your code here

})();

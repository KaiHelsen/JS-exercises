/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let image = document.getElementsByTagName("img")[0];

    image.onmouseover = function(){
        // let imageSrc = image.getAttribute("data-hover");
        imageSrc = image.dataset.hover;
        image.setAttribute("src", imageSrc);
    }



})();

/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * James Koh
 */

/** namespace. */
var rhit = rhit || {};

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");

    document.getElementById("changeBackgroundBtn").addEventListener("click", (event) => {
        if(document.querySelector("body").classList.contains("newBg")){
            document.querySelector("body").classList.remove("newBg");
        } else {
            document.querySelector("body").classList.add("newBg");
        }
    })
};

rhit.main();

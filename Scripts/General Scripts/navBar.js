/*
   Author: James Owen
   Date:   November 19th, 2023

   Filename: main.js
*/

// Load document
document.addEventListener('DOMContentLoaded', () => {

    // navDrop is the icon for the drop down menu
    let navDrop = document.getElementById("navDrop");
    let navigationList = document.getElementById("pages");

    // check to see if the mouse or touch of user has selected the nav image
    function mouseOver() {
        document.querySelector("nav > ul").style.display = "block";
        let str = "";
        /*  Check if the page is the home page since the home page needs to be
            larger to hold the cross reference page */
        if (document.title === "Home - Indigenous Clean Energy") {
            str = "18.75em";
        } else {
            str = "16.5em";
        }
        document.querySelector("nav").style.height = str;
    }

    // check to see if user has left the nav image
    function mouseLeave() {
        // reset the styles so when the user is no longer needing the nav it leaves screen
        document.querySelector("nav > ul#pages").style.display = "none";
        document.querySelector("nav").style.height = "3em";
    }

    // define event listeners
    function eventListeners() {
        // event listener for hover of navigation image
        navDrop.addEventListener("mouseover", mouseOver);
        // event listener for leave of hover of navigation image
        navDrop.addEventListener("mouseleave", mouseLeave);
        // event listener for hover of navigation list
        navigationList.addEventListener("mouseover", mouseOver);
        // event listener for leave of navigation list
        navigationList.addEventListener("mouseleave", mouseLeave);
    }

    // Remove event listeners
    function eventListenersRemove() {
        // remove all event listeners for page size over 480px width
        navDrop.removeEventListener("mouseover", mouseOver);
        navDrop.removeEventListener("mouseleave", mouseLeave);
        navigationList.removeEventListener("mouseover", mouseOver);
        navigationList.removeEventListener("mouseleave", mouseLeave);
    }

    // handle how the navigation looks depending on screen size
    function navBehavior() {
        if (window.innerWidth <= 480) {
            // add a drop down navigation under 480px width
            eventListeners();
        } else {
            // Standered navigation for page 481px and larger
            eventListenersRemove();
            document.querySelector("nav > ul#pages").style.display = "block";
            document.querySelector("nav > ul > li > a").style.padding = "1em 1.5em";
            document.querySelector("nav").style.height = "50%";
        }
    }

    // Initial setup
    navBehavior();

    // Update on window resize
    window.addEventListener('resize', navBehavior);
});

    
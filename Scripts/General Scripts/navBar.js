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

    function mouseOver() {
        document.querySelector("nav > ul").style.display = "block";
        let str = "";
        if (document.title === "Home - Indigenous Clean Energy") {
            str = "10em";
        } else {
            str = "9em";
        }
        document.querySelector("nav").style.height = str;
    }

    function mouseLeave() {
        document.querySelector("nav > ul#pages").style.display = "none";
        document.querySelector("nav").style.height = "3em";
    }

    function eventListeners() {
        navDrop.addEventListener("mouseover", mouseOver);
        navDrop.addEventListener("mouseleave", mouseLeave);
        navigationList.addEventListener("mouseover", mouseOver);
        navigationList.addEventListener("mouseleave", mouseLeave);
    }

    function eventListenersRemove() {
        navDrop.removeEventListener("mouseover", mouseOver);
        navDrop.removeEventListener("mouseleave", mouseLeave);
        navigationList.removeEventListener("mouseover", mouseOver);
        navigationList.removeEventListener("mouseleave", mouseLeave);
    }

    function navBehavior() {
        if (window.innerWidth <= 480) {
            eventListeners();
        } else {
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

    
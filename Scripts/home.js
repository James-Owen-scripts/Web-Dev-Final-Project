/*
   Author: James Owen
   Date:   November 19th, 2023

   Filename: main.js
*/

// wait for document to load
document.addEventListener('DOMContentLoaded', () => {
    // pause and play variables to be inserted into button as strings containing image icons
    var pause = "<img src=\"Resources/Images/Pause.png\" />"
    var play = "<img src=\"Resources/Images/Play.png\" />"
    // count used to check if video should be paused or played
    var count = 0;
    // get pause button and video to alter there states
    var pauseButton = document.getElementById("pauseButton");
    var video = document.getElementById("backgroundVideo");
    // add pause html to the inner of the element
    pauseButton.innerHTML = pause;

    // event listener for when pause button is pressed
    pauseButton.addEventListener('click', () => {
        // count increased signifying change in state
        count++;
        // set to pause if count is divisable by 2 else video is played
        if(count%2 === 0) {
            pauseButton.innerHTML = pause;
            video.play();
        }
        else {
            pauseButton.innerHTML = play;
            video.pause();
        }
    });
});
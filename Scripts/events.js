/*
   Author: James Owen
   Date:   November 29th, 2023

   Filename: events.js
*/

// Listener for events page
document.addEventListener('DOMContentLoaded', () => {
   let events = [document.getElementById("event1Date"), document.getElementById("event2Date"),
                  document.getElementById("event3Date"), document.getElementById("event4Date"),
                  document.getElementById("event5Date")];

   let eventDays = [new Date("December 10, 2023 12:00:00"), new Date("December 12, 2024 14:30:00"),
                  new Date("July 25, 2024 12:00:00"), new Date("July 30, 2024 15:00:00"),
                  new Date("August 12, 2024 16:30:00")];

   let update = setInterval(function () {
      for( let i = 0; i < events.length; i++ ) {
         var currentDay = new Date().getTime();
         var diff = eventDays[i].getTime() - currentDay;

         var days = Math.floor(diff / (1000 * 60 * 60 * 24));
         var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((diff % (1000 * 60)) / 1000);

         events[i].innerHTML = "Date: " + eventDays[i] + "<br />Countdown: " + days + "-D: " + hrs + "-H: " + minutes + "-M: " + seconds + "-S " + "<br />";
         if (diff < 0) {
            clearInterval(update);
            events[i].innerHTML = "Expired";
         }
      }
   }, 1000);
});
/*
   Author: James Owen
   Date:   November 29th, 2023

   Filename: events.js
*/

// Listener for events page
document.addEventListener('DOMContentLoaded', () => {
   
   // list containing all the p tag that holds all the event dates
   let events = [document.getElementById("event1Date"), document.getElementById("event2Date"),
                  document.getElementById("event3Date"), document.getElementById("event4Date"),
                  document.getElementById("event5Date")];

   // list of event dates
   let eventDays = [new Date("December 10, 2023 12:00:00"), new Date("December 12, 2024 14:30:00"),
                  new Date("July 25, 2024 12:00:00"), new Date("July 30, 2024 15:00:00"),
                  new Date("August 12, 2024 16:30:00")];

   // variable holding setInterval function to countdown to event and to display event date and time
   // iterates every second
   let update = setInterval(function () {

      // for loop iterates through each event
      for( let i = 0; i < events.length; i++ ) {

         var currentDay = new Date().getTime(); // holds current date to countdown
         var deltaTime = eventDays[i].getTime() - currentDay; // find delta time to calculate countdown

         var days = Math.floor(deltaTime / (1000 * 60 * 60 * 24)); // calculate days till event
         var hrs = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // calculate hours till event
         var minutes = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)); // calculate minutes till event
         var seconds = Math.floor((deltaTime % (1000 * 60)) / 1000); // calculate seconds till event

         /* output in html in following format:
               Date: weekDay, Month, Day, year, time, time zone 
               Countdown: ddD: hhH: mmM: ssS */
         events[i].innerHTML = "Date: " + eventDays[i] + "<br />Countdown: " + days + "D: " + hrs + "H: " + minutes + "M: " + seconds + "S<br />";
        
         // output "Date Passed" if date has already been passed
         if (deltaTime < 0) {
            clearInterval(update);
            events[i].innerHTML = "Date Passed";
         }
      }
   }, 1000); // countdown every second
});
/*
   Author: James Owen
   Date:   November 19th, 2023

   Filename: contact.js
*/

// Listener for contact page
document.addEventListener('DOMContentLoaded', () => {
    // Listener for submit button
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", validation);

    // Listener for reset button
    let resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", resetEntrys);
});

// validate user input
function validation() {
    // assigning variables to html elements
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let msg = document.getElementById("msg").value;
    // create audio variables for alerts
    let negAlert = document.getElementById("negAudio");
    let posAlert = document.getElementById("posAudio");
    let send = false;
    console.log(name);
    if (name === "") {
        negAlert.play();
        alert("Name Required");
    }
    else if (email === "") {
        negAlert.play();
        alert("Email Required");
    }
    else if (subject === "") {
        negAlert.play();
        alert("Subject Required");
    }
    else {
        for (let i = 0; i < email.length-1; i++) {
            if (email[i] === '@'){
                for (let j = i; j < email.length; j++) {
                    if (email[j] === '.') {
                        send = true;
                    }
                }
            }
        }
        if (!send) {
            negAlert.play();
            alert("Incorrect Email Entry");
        }
        else {
            posAlert.play();
            alert("Message sent successfully.\nThank you " + name + "\nEmail: " + email + 
                "\nSubject: " + subject + "\nMessage: " + msg);

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("msg").value = "";
        }
    }
}

function resetEntrys() {
    // create audio variable for alert
    let resAlert = document.getElementById("resAudio");
    // play alert
    resAlert.play();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("msg").value = "";
}
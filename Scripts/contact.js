/*
   Author: James Owen
   Date:   November 19th, 2023

   Filename: contact.js
*/

// Listener for submit button
document.addEventListener('DOMContentLoaded', () => {
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", validation);
});

// validate user input
function validation() {
    // assigning variables to html elements
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let msg = document.getElementById("msg").value;
    let send = false;
    console.log(name);
    if (name === "") {
        alert("Name Required");
    }
    else if (email === "") {
        alert("Email Required");
    }
    else if (subject === "") {
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
            alert("Incorrect Email Entry");
        }
        else {
            alert("Message sent successfully.\nThank you " + name + "\nEmail: " + email + 
                "\nSubject: " + subject + "\nMessage: " + msg);

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("msg").value = "";
        }
    }
}
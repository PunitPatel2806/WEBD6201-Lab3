/*
    Student Name  : Punit Patel 
    StudentID     : 100734638
    Date Completed: 28-JAN-2020
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {


        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

        

        document.getElementById('largeButton').innerHTML = 'Learn More'; // Change the button text

        document.getElementById('firstParagraph').style.display = 'none'; // hide the paragraph

        let str = document.getElementById("firstParagraph").innerHTML; // Replace the text in paragraph
        let res = str.replace("This simple site is the template you will use for your Test.", "JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods.");
        document.getElementById("firstParagraph").innerHTML = res;
    }



    window.addEventListener("load", Start);
})(app || (app = {}));


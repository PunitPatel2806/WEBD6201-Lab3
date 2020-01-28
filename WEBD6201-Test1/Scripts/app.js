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

        document.getElementById('largeButton').innerHTML = 'Learn More';
    }



    window.addEventListener("load", Start);
})(app || (app = {}));


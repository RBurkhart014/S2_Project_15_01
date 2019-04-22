"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Ryan Burkhart
   Date: 4/22/19  
   
   Filename: mpl_links.js

*/

window.addEventListener("load", function () {

    var allSelect = document.forms.govLinks;
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].onchange = function (e) {
            window.location.href = e.target.value;
        }
    }
})

//Added an event listener allowing me to choose between 4 different government related websites
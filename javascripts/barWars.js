"use strict";

var RNG = require("./randomNumbers.js");
var attacks = require("./attacks.js");
var classes = require("./classes.js");


/////***Global vars***\\\\\

const maxStat = 17; //no stat may go above this number
const minStat = 5; //no stat may go below this number

var patronClass = null; //selected patron class
var staffClass = null; //selected staff class
var patronAttack = null; //selected patron attack
var staffAttack = null; //selected staff attack

var totalTurns = 0; //total turn taken in the game
var patronTurns = 0; //total turn taken by patron
var staffTurns = 0; //total turns taken by staff

var patronTurn = true;

///////*****Functions*****\\\\\\\
//need functions for:
//comparing to secondary stats
//adjusting life totals
//running special attacks
//running base attacks
////function for rolling damage.
//changing button's disabled status on turn change
/////***Functions to get user input***\\\\\
function identifyPatronClass(event) {
    for (let i = 0; i < classes.patronClassArray.length; i++) {
        let currentClass = classes.patronClassArray[i];
        if ($("#patronClasses").val()[0] === currentClass.name) {
            patronClass = currentClass;
            console.log("Patron Class", patronClass);
        }
    }
}

function identifyStaffClass(event) {
    for (let i = 0; i < classes.staffClassArray.length; i++) {
        let currentClass = classes.staffClassArray[i];
        if ($("#staffClasses").val()[0] === currentClass.name) {
            staffClass = currentClass;
            console.log("Staff Class", staffClass);
        }
    }
}

function identifyPatronAttack(event) {
    for (let i = 0; i < attacks.patronAttacksArray.length; i++) {
        let currentAttack = attacks.patronAttacksArray[i];
        if ($("#patronAttacks").val()[0] === currentAttack.name) {
            patronAttack = currentAttack;
            console.log("Patron Attack", patronAttack);
        }
    }
}

function identifyStaffAttack(event) {
    for (let i = 0; i < attacks.staffAttacksArray.length; i++) {
        let currentAttack = attacks.staffAttacksArray[i];
        if ($("#staffAttacks").val()[0] === currentAttack.name) {
            staffAttack = currentAttack;
            console.log("Staff Attack", staffAttack);
        }
    }
}
/////***Attack Functions***\\\\\\


/////***Exports for Browserify***\\\\\
module.exports = {
    identifyPatronClass, identifyStaffClass, identifyStaffAttack, identifyPatronAttack
};
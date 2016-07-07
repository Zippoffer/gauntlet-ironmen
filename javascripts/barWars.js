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

var patronName = null; //for using in phrases
var staffName = null;

///////*****Functions*****\\\\\\\
//need functions for:
//running special attacks
/////***Functions to get user input***\\\\\
function identifyPatronClass(event) {
    for (let i = 0; i < classes.patronClassArray.length; i++) {
        let currentClass = classes.patronClassArray[i];
        if ($("#patronClasses").val()[0] === currentClass.name) {
            patronClass = currentClass;
            console.log("Patron Class", patronClass);
        }
    }
    patronName = patronClass.name.replace(/_/g, " ");
    console.log("patronName", patronName);
    $("#patronClasses").prop("disabled", true);
}

function identifyStaffClass(event) {
    for (let i = 0; i < classes.staffClassArray.length; i++) {
        let currentClass = classes.staffClassArray[i];
        if ($("#staffClasses").val()[0] === currentClass.name) {
            staffClass = currentClass;
            console.log("Staff Class", staffClass);
        }
    }
    staffName = staffClass.name.replace(/_/g, " ");
    console.log("staffName", staffName);
    $("#staffClasses").prop("disabled", true);
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

function patronBaseAttack(event) {
    $("#patronFight").prop("disabled", true);
    console.log("starting staff PP", staffClass.partyPoints);
    let attackValue = RNG.d20Random();
    let startingPartyPoints = patronClass.partyPoints; //to be used with the display function
    let baseDamage = RNG.randomRange(patronAttack.minDamage, patronAttack.maxDamage); 
    let totalDamage = 0;
    if (patronAttack.opposingStat === "stress") { //if the opposing stat is stress then use this attack scenario
        if (attackValue >= staffClass.stress) { //compare the hit value to stress
            if (patronClass.name === patronAttack.favoriteClass) { //if it is the favored class add the bonus damage
                if (attackValue >= staffClass.stress + 5) { //if it is favored AND 5+ more that stress multiply damage by 3
                    totalDamage = 3 * (baseDamage + patronAttack.favoriteClassBonus);
                } else { //if it is favored and NOT 5+ over the stress level do normal damage 
                    totalDamage = baseDamage + patronAttack.favoriteClassBonus;
                }
            } else {
                if (attackValue >= staffClass.stress + 5) {
                    totalDamage = 3 * (baseDamage);
                } else {
                    totalDamage = baseDamage;
                }
            }
        }
    } else {
        if (RNG.d20Random() >= staffClass.money) {
            if (attackValue >= staffClass.money) {
                if (patronClass.name === patronAttack.favoriteClass) {
                    if (attackValue >= staffClass.money + 5) {
                        totalDamage = 3 * (baseDamage + patronAttack.favoriteClassBonus);
                    } else {
                        totalDamage = baseDamage + patronAttack.favoriteClassBonus;
                    }
                } else {
                    if (attackValue >= staffClass.money + 5) {
                        totalDamage = 3 * (baseDamage);
                    } else {
                        totalDamage = baseDamage;
                    }
                }
            }
        }
    }
    totalTurns++;
    patronTurns++;
    staffClass.partyPoints -= totalDamage;
    $("#staffFight").prop("disabled", false);
    console.log("ending PP", staffClass.partyPoints);
}

function staffBaseAttack(event) {
    console.log("starting patron PP", patronClass.partyPoints);
    $("#staffFight").prop("disabled", true);
    let attackValue = RNG.d20Random();
    let startingPartyPoints = patronClass.partyPoints; //to be used with the display function
    let baseDamage = RNG.randomRange(patronAttack.minDamage, patronAttack.maxDamage); 
    let totalDamage = 0;
    if (staffAttack.opposingStat === "pleasure") { //if the opposing stat is pleasure then use this attack scenario
        if (attackValue >= patronClass.pleasure) { //compare the hit value to pleasure
            if (staffClass.name === staffAttack.favoriteClass) { //if it is the favored class add the bonus damage
                if (attackValue >= patronClass.pleasure + 5) { //if it is favored AND 5+ more that pleasure multiply damage by 3
                    totalDamage = 3 * ((baseDamage) + staffAttack.favoriteClassBonus);
                } else { //if it is favored and NOT 5+ over the pleasure level do normal damage 
                    totalDamage = baseDamage + staffAttack.favoriteClassBonus;
                }
            } else { //if no favored class roll on this nest of statements
                if (attackValue >= patronClass.pleasure + 5) {
                    totalDamage = 3 * baseDamage;
                } else {
                    totalDamage = baseDamage;
                }
            }
        }
    } else { //use the following is comparing to sobriety
        if (RNG.d20Random() >= patronClass.sobriety) {
            if (attackValue >= patronClass.sobriety) {
                if (staffClass.name === staffAttack.favoriteClass) {
                    if (attackValue >= patronClass.sobriety + 5) {
                        totalDamage = 3 * (baseDamage + staffAttack.favoriteClassBonus);
                    } else {
                        totalDamage = baseDamage + staffAttack.favoriteClassBonus;
                    }
                } else {
                    if (attackValue >= patronClass.sobriety + 5) {
                        totalDamage = 3 * baseDamage ;
                    } else {
                        totalDamage = baseDamage;
                    }
                }
            }
        }
    }
    totalTurns++;
    staffTurns++;
    patronClass.partyPoints -= totalDamage;
    $("#patronFight").prop("disabled", false);
    console.log("ending PP", patronClass.partyPoints);
}
//helper functions for displaying base attack messages 
function displayDamageMessagesToDOM(startingPP) {

}

//this function is used if the staryingPartyPoints === xxx.partyPoints
//after the function completes
function displayAttackFailureMessage() {}


/////***Exports for Browserify***\\\\\
module.exports = {
    identifyPatronClass, identifyStaffClass, identifyStaffAttack, identifyPatronAttack, patronBaseAttack, staffBaseAttack
};
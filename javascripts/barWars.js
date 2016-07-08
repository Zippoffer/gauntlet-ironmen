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
        }
    }
    patronName = patronClass.name.replace(/_/g, " ");
    $("#patronClasses").prop("disabled", true);

    $("#patronPointsBar").width(patronClass.partyPoints + '%'); //change width of points bar to points value
    $("#patronBarLabel").text(`${patronName}: ${patronClass.partyPoints}`); //put points starting value in bar
    $("#staffClasses").prop("disabled", false);
}

function identifyStaffClass(event) {
    for (let i = 0; i < classes.staffClassArray.length; i++) {
        let currentClass = classes.staffClassArray[i];
        if ($("#staffClasses").val()[0] === currentClass.name) {
            staffClass = currentClass;
        }
    }
    staffName = staffClass.name.replace(/_/g, " ");
    $("#staffClasses").prop("disabled", true);

    $("#staffPointsBar").width(staffClass.partyPoints + '%'); //change width of points bar to points value
    $("#staffBarLabel").text(`${staffName}: ${staffClass.partyPoints}`); //put points starting value in bar
    $("#patronAttacks").prop("disabled", false);
}

function identifyPatronAttack(event) {
    for (let i = 0; i < attacks.patronAttacksArray.length; i++) {
        let currentAttack = attacks.patronAttacksArray[i];
        if ($("#patronAttacks").val()[0] === currentAttack.name) {
            patronAttack = currentAttack;
            patronClass.attack = currentAttack;
        }
    }
    $("#staffAttacks").prop("disabled", false);
}

function identifyStaffAttack(event) {
    for (let i = 0; i < attacks.staffAttacksArray.length; i++) {
        let currentAttack = attacks.staffAttacksArray[i];
        if ($("#staffAttacks").val()[0] === currentAttack.name) {
            staffAttack = currentAttack;
            staffClass.attack = currentAttack;
        }
    }
    $("#patronFight").prop("disabled", false);
    $("#staffFight").prop("disabled", false);
}
/////***Attack Functions***\\\\\\

function patronBaseAttack(event) {
    $("#patronFight").prop("disabled", true);
    console.log("starting staff PP", staffClass.partyPoints);
    let attackValue = RNG.d20Random();
    console.log("Patron attack roll", attackValue);
    let startingPartyPoints = patronClass.partyPoints; //to be used with the display function
    let baseDamage = RNG.randomRange(patronAttack.minDamage, patronAttack.maxDamage);
    let totalDamage = 0;

    let patronAttackPhrase = patronClass.attack.attackPhrase.replace(/patronName/g, patronName);
    patronAttackPhrase = patronAttackPhrase.replace(/staffName/g, staffName);
    $("#output").prepend(`<div class="damageCard" id="turn__${totalTurns}__results"><p class="attackPhrase">${patronAttackPhrase}</p></div>`);

    if (patronAttack.opposingStat === "stress") { //if the opposing stat is stress then use this attack scenario
        if (attackValue >= staffClass.stress) { //compare the hit value to stress
            if (patronClass.name === patronAttack.favoriteClass) { //if it is the favored class add the bonus damage
                if (attackValue >= staffClass.stress + 8) { //if it is favored AND 5+ more that stress multiply damage by 3
                    totalDamage = 3 * (baseDamage + patronAttack.favoriteClassBonus);
                } else { //if it is favored and NOT 5+ over the stress level do normal damage 
                    totalDamage = baseDamage + patronAttack.favoriteClassBonus;
                }
            } else {
                if (attackValue >= staffClass.stress + 8) {
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
                    if (attackValue >= staffClass.money + 8) {
                        totalDamage = 3 * (baseDamage + patronAttack.favoriteClassBonus);
                    } else {
                        totalDamage = baseDamage + patronAttack.favoriteClassBonus;
                    }
                } else {
                    if (attackValue >= staffClass.money + 8) {
                        totalDamage = 3 * (baseDamage);
                    } else {
                        totalDamage = baseDamage;
                    }
                }
            }
        }
    }
    if (totalDamage > 0) {
        displayAttackSuccessMessage(patronClass, staffClass, totalDamage);
    } else {
        displayAttackFailureMessage(patronClass, staffClass);
    }
    totalTurns++;
    patronTurns++;
    staffClass.partyPoints -= totalDamage;
    if (staffClass.partyPoints < 1) { //prevent negative party points
    	staffClass.partyPoints = 0;
    }

    $("#staffPointsBar").width(staffClass.partyPoints + '%'); //change points bar length
    $("#staffBarLabel").text(staffClass.partyPoints); //change points in bar
    checkPointsDisplay(staffClass.partyPoints); //update styling of points display

    if (staffClass.partyPoints < 1) {
        $("#staffFight").prop("disabled", true);
        $("#output").prepend(`<h3 class="victory">The ${patronName} WINS!</h3>`);
    } else {
        $("#staffFight").prop("disabled", false);
    }
    patronTurn = false; //changes to staff's turn
}

function staffBaseAttack(event) {
    console.log("starting patron PP", patronClass.partyPoints);
    $("#staffFight").prop("disabled", true);
    let attackValue = RNG.d20Random();
    console.log("Staff attack roll", attackValue);
    let startingPartyPoints = patronClass.partyPoints; //to be used with the display function
    let baseDamage = RNG.randomRange(patronAttack.minDamage, patronAttack.maxDamage);
    let totalDamage = 0;

    let staffAttackPhrase = staffClass.attack.attackPhrase.replace(/patronName/g, patronName);
    staffAttackPhrase = staffAttackPhrase.replace(/staffName/g, staffName);
    $("#output").prepend(`<div class="damageCard" id="turn__${totalTurns}__results"><p class="attackPhrase">${staffAttackPhrase}</p></div>`);

    if (staffAttack.opposingStat === "pleasure") { //if the opposing stat is pleasure then use this attack scenario
        if (attackValue >= patronClass.pleasure) { //compare the hit value to pleasure
            if (staffClass.name === staffAttack.favoriteClass) { //if it is the favored class add the bonus damage
                if (attackValue >= patronClass.pleasure + 8) { //if it is favored AND 5+ more that pleasure multiply damage by 3
                    totalDamage = 3 * ((baseDamage) + staffAttack.favoriteClassBonus);
                } else { //if it is favored and NOT 5+ over the pleasure level do normal damage 
                    totalDamage = baseDamage + staffAttack.favoriteClassBonus;
                }
            } else { //if no favored class roll on this nest of statements
                if (attackValue >= patronClass.pleasure + 8) {
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
                    if (attackValue >= patronClass.sobriety + 8) {
                        totalDamage = 3 * (baseDamage + staffAttack.favoriteClassBonus);
                    } else {
                        totalDamage = baseDamage + staffAttack.favoriteClassBonus;
                    }
                } else {
                    if (attackValue >= patronClass.sobriety + 8) {
                        totalDamage = 3 * baseDamage;
                    } else {
                        totalDamage = baseDamage;
                    }
                }
            }
        }
    }
    if (totalDamage > 0) {
        displayAttackSuccessMessage(staffClass, patronClass, totalDamage);
    } else {
        displayAttackFailureMessage(staffClass, patronClass);
    }
    totalTurns++;
    staffTurns++;
    patronClass.partyPoints -= totalDamage;

    if (patronClass.partyPoints < 1) { //prevent negative party points
    	patronClass.partyPoints = 0;
    }
    $("#patronPointsBar").width(patronClass.partyPoints + '%'); //change points bar length
    $("#patronBarLabel").text(patronClass.partyPoints); //change points in bar
    checkPointsDisplay(patronClass.partyPoints); //update styling of points display

    if (patronClass.partyPoints < 1) {
        $("#patronFight").prop("disabled", true);
        $("#output").prepend(`<h3 class="victory">The ${staffName} WINS!</h3>`);
    } else {
        $("#patronFight").prop("disabled", false);
    }
    patronTurn = true; //changes to patron's turn

}


//helper function for updating the party points display
function checkPointsDisplay(points) {
    var $targetPointsBar = $("#patronPointsBar");
    var $targetPointsLabel = $("#patronBarLabel");
    if (patronTurn === true) {
      $targetPointsBar = $("#staffPointsBar");
      $targetPointsLabel = $("#staffBarLabel");
    }

    if (points === 0){
        $targetPointsBar.removeClass("almostDead").addClass("dead");
        $targetPointsLabel.removeClass("almostDead").addClass("dead");
    } else if (points < 10) {
        $targetPointsBar.removeClass("dying").addClass("almostDead");
        $targetPointsLabel.removeClass("dying").addClass("almostDead");
    } else if (points < 25) {
        $targetPointsBar.removeClass("hurting").addClass("dying");
        $targetPointsLabel.removeClass("hurting").addClass("dying");
    } else if (points < 50) {
        $targetPointsBar.removeClass("healthy").addClass("hurting");
        $targetPointsLabel.removeClass("healthy").addClass("hurting");
    }
}



//helper functions for displaying base attack messages 
function displayAttackSuccessMessage(attackingClass, defendingClass, damage) {
    if (attackingClass.patron === true) { //if the attacker is the patron do this
        let attackerSuccessPhrase = attackingClass.attack.successPhrase.replace(/patronName/g, patronName);
        attackerSuccessPhrase = attackerSuccessPhrase.replace(/staffName/g, staffName);
        $(`#turn__${totalTurns}__results`).append(`<p class="successPhrase">${attackerSuccessPhrase}</p>`);
        $(`#turn__${totalTurns}__results`).append(`<p> ${patronName} knocks off ${damage} Party Points from ${staffName}!</p>`);
    } else { //if the attacker is the staff do this
        let attackerSuccessPhrase = attackingClass.attack.successPhrase.replace(/staffName/g, staffName);
        attackerSuccessPhrase = attackerSuccessPhrase.replace(/patronName/g, patronName);
        $(`#turn__${totalTurns}__results`).append(`<p class="successPhrase">${attackerSuccessPhrase}</p>`);
        $(`#turn__${totalTurns}__results`).append(`<p> ${staffName} knocks off ${damage} Party Points from ${patronName}!</p>`);
    }
}

//this function is used if the staryingPartyPoints === xxx.partyPoints
//after the function completes
function displayAttackFailureMessage(attackingClass, defendingClass) {
    if (attackingClass.patron === true) { //if the attacker is the patron do this
        let attackerFailPhrase = attackingClass.attack.failPhrase.replace(/patronName/g, patronName);
        attackerFailPhrase = attackerFailPhrase.replace(/staffName/g, staffName);
        $(`#turn__${totalTurns}__results`).append(`<p class="failPhrase">${attackerFailPhrase}</p>`);
    } else { //if the attacker is the staff do this
        let attackerFailPhrase = attackingClass.attack.failPhrase.replace(/staffName/g, staffName);
        attackerFailPhrase = attackerFailPhrase.replace(/patronName/g, patronName);
        $(`#turn__${totalTurns}__results`).append(`<p class="failPhrase">${attackerFailPhrase}</p>`);
    }
}

/////***Exports for Browserify***\\\\\
module.exports = {
    identifyPatronClass, identifyStaffClass, identifyStaffAttack, identifyPatronAttack, patronBaseAttack, staffBaseAttack
};
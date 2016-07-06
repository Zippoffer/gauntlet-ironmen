"use strict";


	var barWars = require("./barWars.js");
	var classes = require("./classes.js");
	var attacks = require("./attacks.js");
	var specials = require("./specialAbilities.js"); //for future-proofing


$(document).ready(function(){
	/////***Event Listeners***\\\\\
	$("#patronClasses").change(barWars.identifyPatronClass);
	$("#staffClasses").change(barWars.identifyStaffClass);
	$("#patronAttacks").change(barWars.identifyPatronAttack);
	$("#staffAttacks").change(barWars.identifyStaffAttack);
	
	$("#patronFight").click(barWars.patronBaseAttack);
	$("#staffFight").click(barWars.staffBaseAttack);
	/////***DropDown Populating Functions***\\\\\
	function populatePatronClasses(){
		for(let i = 0; i < classes.patronClassArray.length; i++){
			let currentClass = classes.patronClassArray[i];
			let currentClassName = currentClass.name; 
			let currentClassDisplayName = currentClassName.replace(/_/g, " ");

			$("#patronClasses").append(`<option value="${currentClassName}">${currentClassDisplayName}</option>`);
		}
	}

	function populatePatronAttacks(){
		for(let i = 0; i < attacks.patronAttacksArray.length; i++){
			let currentAttack = attacks.patronAttacksArray[i];
			let currentAttackName = currentAttack.name; 
			let currentAttackDisplayName = currentAttackName.replace(/_/g, " ");

			$("#patronAttacks").append(`<option value="${currentAttackName}">${currentAttackDisplayName}</option>`);
		}
	}


	function populateStaffClasses() {
    for (let i = 0; i < classes.staffClassArray.length; i++) {
        let currentClass = classes.staffClassArray[i];
        let currentClassName = currentClass.name;
        let currentClassDisplayName = currentClassName.replace(/_/g, " ");

        $("#staffClasses").append(`<option value="${currentClassName}">${currentClassDisplayName}</option>`);
	    }
	}

	function populateStaffAttacks() {
    for (var i = 0; i < attacks.staffAttacksArray.length; i++) {
        let currentAttack = attacks.staffAttacksArray[i];
        let currentAttackName = currentAttack.name;
        let currentAttackDisplayName = currentAttackName.replace(/_/g, " ");

        $("#staffAttacks").append(`<option value="${currentAttackName}">${currentAttackDisplayName}</option>`);
	    }
	}


populatePatronClasses();
populatePatronAttacks();
populateStaffClasses();
populateStaffAttacks();

});
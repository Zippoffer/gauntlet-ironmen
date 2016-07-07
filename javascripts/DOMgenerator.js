"use strict";


	var barWars = require("./barWars.js");
	var classes = require("./classes.js");
	var attacks = require("./attacks.js");
	var specials = require("./specialAbilities.js"); //for future-proofing

  var gameHasStarted = false;

$(document).ready(function(){
	/////***Event Listeners***\\\\\
	$("#patronClasses").change(barWars.identifyPatronClass);
	$("#staffClasses").change(barWars.identifyStaffClass);
	$("#patronAttacks").change(barWars.identifyPatronAttack);
	$("#staffAttacks").change(barWars.identifyStaffAttack);
	
	$("#patronFight").click(barWars.patronBaseAttack);
	$("#staffFight").click(barWars.staffBaseAttack);

  $("#patronFight").click(function() {gameHasStarted = true});
  $("#staffFight").click(function() {gameHasStarted = true});

	/////***DropDown Populating Functions***\\\\\
	function populatePatronClasses(){

    let mouseIn = function() {
      if (gameHasStarted === false) {
        for (var x in classes.patronClassArray) {
          if (classes.patronClassArray[x].name === this.id) {
            let currentMouseOver = classes.patronClassArray[x];
            $("#output").append(`<p>Name: ${currentMouseOver.name}</p>`);
            $("#output").append(`<p>Pleasure: ${currentMouseOver.pleasure}</p>`);
            $("#output").append(`<p>Sobriety: ${currentMouseOver.sobriety}</p>`);
            $("#output").append(`<p>Max Health Points: ${currentMouseOver.maxPoints}</p>`);
            $("#output").append(`<p>Min Health Points: ${currentMouseOver.minPoints}</p>`);
          }
        }
      }
    }
    let mouseOut = function() {
      if (gameHasStarted === false) {
       $("#output").html(" ");
      }
    }

		for(let i = 0; i < classes.patronClassArray.length; i++){
			let currentClass = classes.patronClassArray[i];
			let currentClassName = currentClass.name; 
			let currentClassDisplayName = currentClassName.replace(/_/g, " ");

			$("#patronClasses").append(`<option id="${currentClassName}" value="${currentClassName}">${currentClassDisplayName}</option>`);

      $(`#${currentClassName}`).hover(mouseIn, mouseOut);
		}
  }


	function populatePatronAttacks(){

    let mouseIn = function() {
      if (gameHasStarted === false) {
        for (var x in attacks.patronAttacksArray) {
          if (attacks.patronAttacksArray[x].name === this.id) {
            let currentMouseOver = attacks.patronAttacksArray[x];
            $("#output").append(`<p>Name: ${currentMouseOver.name}</p>`);
            $("#output").append(`<p>Favorite User: ${currentMouseOver.favoriteClass}</p>`);
            $("#output").append(`<p>Favorite User Bonus: ${currentMouseOver.favoriteClassBonus}</p>`);
          }
        }
      }
    }
    let mouseOut = function() {
      if (gameHasStarted === false) {
       $("#output").html(" ");
      }
    }

		for(let i = 0; i < attacks.patronAttacksArray.length; i++){
			let currentAttack = attacks.patronAttacksArray[i];
			let currentAttackName = currentAttack.name; 
			let currentAttackDisplayName = currentAttackName.replace(/_/g, " ");

			$("#patronAttacks").append(`<option id="${currentAttackName}" value="${currentAttackName}">${currentAttackDisplayName}</option>`);

      $(`#${currentAttackName}`).hover(mouseIn, mouseOut);
		}
	}


	function populateStaffClasses() {

    let mouseIn = function() {
      if (gameHasStarted === false) {
        for (var x in classes.staffClassArray) {
          if (classes.staffClassArray[x].name === this.id) {
            let currentMouseOver = classes.staffClassArray[x];
            $("#output").append(`<p>Name: ${currentMouseOver.name}</p>`);
            $("#output").append(`<p>Money: ${currentMouseOver.money}</p>`);
            $("#output").append(`<p>Stress Level: ${currentMouseOver.stress}</p>`);
            $("#output").append(`<p>Max Health Points: ${currentMouseOver.maxPoints}</p>`);
            $("#output").append(`<p>Min Health Points: ${currentMouseOver.minPoints}</p>`);
          }
        }
      }
    }
    let mouseOut = function() {
      if (gameHasStarted === false) {
       $("#output").html(" ");
     }
    }

    for (let i = 0; i < classes.staffClassArray.length; i++) {
        let currentClass = classes.staffClassArray[i];
        let currentClassName = currentClass.name;
        let currentClassDisplayName = currentClassName.replace(/_/g, " ");

        $("#staffClasses").append(`<option id="${currentClassName}" value="${currentClassName}">${currentClassDisplayName}</option>`);

        $(`#${currentClassName}`).hover(mouseIn, mouseOut);
	    }
	}

	function populateStaffAttacks() {

    let mouseIn = function() {
      if (gameHasStarted === false) {
        for (var x in attacks.staffAttacksArray) {
          if (attacks.staffAttacksArray[x].name === this.id) {
            let currentMouseOver = attacks.staffAttacksArray[x];
            $("#output").append(`<p>Name: ${currentMouseOver.name}</p>`);
            $("#output").append(`<p>Favorite User: ${currentMouseOver.favoriteClass}</p>`);
            $("#output").append(`<p>Favorite User Bonus: ${currentMouseOver.favoriteClassBonus}</p>`);
          }
        }
      }
    }
    let mouseOut = function() {
      if (gameHasStarted === false) {
      $("#output").html(" ");
      }
    }

    for (var i = 0; i < attacks.staffAttacksArray.length; i++) {
        let currentAttack = attacks.staffAttacksArray[i];
        let currentAttackName = currentAttack.name;
        let currentAttackDisplayName = currentAttackName.replace(/_/g, " ");

        $("#staffAttacks").append(`<option id="${currentAttackName}" value="${currentAttackName}">${currentAttackDisplayName}</option>`);

        $(`#${currentAttackName}`).hover(mouseIn, mouseOut);
	    }
	}


populatePatronClasses();
populatePatronAttacks();
populateStaffClasses();
populateStaffAttacks();

});
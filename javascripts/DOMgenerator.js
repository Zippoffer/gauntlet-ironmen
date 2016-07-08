"use strict";


var barWars = require("./barWars.js");
var classes = require("./classes.js");
var attacks = require("./attacks.js");
var specials = require("./specialAbilities.js"); //for future-proofing

var gameHasStarted = false;

$(document).ready(function() {
    /////***Event Listeners***\\\\\
    $("#patronClasses").change(barWars.identifyPatronClass);
    $("#staffClasses").change(barWars.identifyStaffClass);
    $("#patronAttacks").change(barWars.identifyPatronAttack);
    $("#staffAttacks").change(barWars.identifyStaffAttack);

    $("#patronFight").click(barWars.patronBaseAttack);
    $(window).keydown(function(event){
      if($("#patronFight").prop("disabled") !== true){
        if(event.which === 49){
         gameHasStarted = true;
         barWars.patronBaseAttack(event); 
        }
      }
    });
    $("#staffFight").click(barWars.staffBaseAttack);
     $(window).keydown(function(event){
      if($("#staffFight").prop("disabled") !== true){
        if(event.which === 50){
         gameHasStarted = true;
         barWars.staffBaseAttack(event); 
        }
      }
    });
    $("#patronFight").click(function() {
        gameHasStarted = true;
    });
    $("#staffFight").click(function() {
        gameHasStarted = true;
    });

    /////***DropDown Populating Functions***\\\\\
    function populatePatronClasses() {

        let mouseIn = function() {
            event.target.style.color = "#9FFF21";
            if (gameHasStarted === false) {
                for (var x in classes.patronClassArray) {
                    if (classes.patronClassArray[x].name === this.id) {
                        let currentMouseOver = classes.patronClassArray[x];
                        let htmlHolder = "";
                        htmlHolder += (`<p class="selectStats selectStatsName">${currentMouseOver.name}</p>`);
                        htmlHolder += (`<p class="selectStats">Pleasure Pts: ${currentMouseOver.pleasure}</p>`);
                        htmlHolder += (`<p class="selectStats">Sobriety Pts: ${currentMouseOver.sobriety}</p>`);
                        htmlHolder += (`<p class="selectStats">Max Health Pts: ${currentMouseOver.maxPoints}</p>`);
                        htmlHolder += (`<p class="selectStats">Min Health Pts: ${currentMouseOver.minPoints}</p>`);
                        htmlHolder += (`<img class="patronImage" src="${currentMouseOver.image}">`);
                        htmlHolder = htmlHolder.replace(/_/g, " ");
                        $("#output").html(htmlHolder);
                    }
                }
            }
        }
        let mouseOut = function() {
            event.target.style.color = "";
            if (gameHasStarted === false) {
                $("#output").html(" ");
            }
        }

        for (let i = 0; i < classes.patronClassArray.length; i++) {
            let currentClass = classes.patronClassArray[i];
            let currentClassName = currentClass.name;
            let currentClassDisplayName = currentClassName.replace(/_/g, " ");

            $("#patronClasses").append(`<option id="${currentClassName}" value="${currentClassName}">${currentClassDisplayName}</option>`);

            $(`#${currentClassName}`).hover(mouseIn, mouseOut);
        }
    }


    function populatePatronAttacks() {

        let mouseIn = function() {
            event.target.style.color = "#9FFF21";
            $("#output").prepend(`<div id="mouseOverWeaponPopUp" class="popUp"></div>`);
            $("#mouseOverWeaponPopUp").prepend(`<p class="newPopUp"></p>`);
            let htmlHolder = "";
            for (var x in attacks.patronAttacksArray) {
                if (attacks.patronAttacksArray[x].name === this.id) {
                    let currentMouseOver = attacks.patronAttacksArray[x];
                    htmlHolder += (`<p class="selectStats selectStatsName">${currentMouseOver.name}</p>`);
                    htmlHolder += (`<p class="selectStats">Min Chance of Damage: ${currentMouseOver.minDamage}</p>`);
                    htmlHolder += (`<p class="selectStats">Max Chance of Damage: ${currentMouseOver.maxDamage}</p>`);
                    htmlHolder += (`<p class="selectStats">Fav User: ${currentMouseOver.favoriteClass}</p>`);
                    htmlHolder += (`<p class="selectStats">Fav User Bonus Pts: ${currentMouseOver.favoriteClassBonus}</p>`);
                    htmlHolder = htmlHolder.replace(/_/g, " ");
                    $(".newPopUp").html(htmlHolder);
                }
            }
        }
        let mouseOut = function() {
            event.target.style.color = "";
            // if (gameHasStarted === false) {
            //     $("#output").html(" ");
            // }
            $("#mouseOverWeaponPopUp").remove();
        }

        for (let i = 0; i < attacks.patronAttacksArray.length; i++) {
            let currentAttack = attacks.patronAttacksArray[i];
            let currentAttackName = currentAttack.name;
            let currentAttackDisplayName = currentAttackName.replace(/_/g, " ");

            $("#patronAttacks").append(`<option id="${currentAttackName}" value="${currentAttackName}">${currentAttackDisplayName}</option>`);

            $(`#${currentAttackName}`).hover(mouseIn, mouseOut);
        }
    }


    function populateStaffClasses() {

        let mouseIn = function() {
            event.target.style.color = "#9FFF21";
            if (gameHasStarted === false) {
                for (var x in classes.staffClassArray) {
                    if (classes.staffClassArray[x].name === this.id) {
                        let currentMouseOver = classes.staffClassArray[x];
                        let htmlHolder = "";
                        htmlHolder += (`<p class="selectStats selectStatsName selectStatsAlignRight">${currentMouseOver.name}</p>`);
                        htmlHolder += (`<p class="selectStats selectStatsAlignRight">Money: ${currentMouseOver.money}</p>`);
                        htmlHolder += (`<p class="selectStats selectStatsAlignRight">Stress Level: ${currentMouseOver.stress}</p>`);
                        htmlHolder += (`<p class="selectStats selectStatsAlignRight">Max Health Pts: ${currentMouseOver.maxPoints}</p>`);
                        htmlHolder += (`<p class="selectStats selectStatsAlignRight">Min Health Pts: ${currentMouseOver.minPoints}</p>`);
                        htmlHolder += (`<img class="staffImage" src="${currentMouseOver.image}">`);
                        htmlHolder = htmlHolder.replace(/_/g, " ");
                        $("#output").html(htmlHolder);
                    }
                }
            }
        }
        let mouseOut = function() {
            event.target.style.color = "";
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
            event.target.style.color = "#9FFF21";
            $("#output").prepend(`<div id="mouseOverWeaponPopUp" class="popUp"></div>`);
            $("#mouseOverWeaponPopUp").prepend(`<p class="newPopUp"></p>`);
            let htmlHolder = "";

            for (var x in attacks.staffAttacksArray) {
                if (attacks.staffAttacksArray[x].name === this.id) {
                    let currentMouseOver = attacks.staffAttacksArray[x];
                    let htmlHolder = ""
                    htmlHolder += (`<p class="selectStats selectStatsName selectStatsAlignRight">${currentMouseOver.name}</p>`);
                    htmlHolder += (`<p  class="selectStats selectStatsAlignRight">Min Damage Pts: ${currentMouseOver.minDamage}</p>`);
                    htmlHolder += (`<p  class="selectStats selectStatsAlignRight">Max Damage Pts: ${currentMouseOver.maxDamage}</p>`);
                    htmlHolder += (`<p class="selectStats selectStatsAlignRight">Fav User: ${currentMouseOver.favoriteClass}</p>`);
                    htmlHolder += (`<p  class="selectStats selectStatsAlignRight">Fav User Bonus Pts: ${currentMouseOver.favoriteClassBonus}</p>`);
                    htmlHolder = htmlHolder.replace(/_/g, " ");
                    $(".newPopUp").html(htmlHolder);
                }
            }
        }
        let mouseOut = function() {
            event.target.style.color = "";
            // if (gameHasStarted === false) {
            //     $("#output").html(" ");
            // }
            $("#mouseOverWeaponPopUp").remove();
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
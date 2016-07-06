"use strict";

var RNG = require("./randomNumbers.js");

function Attack(min, max){
	this.minDamage = min;
	this.maxDamage = max;
}
///////*****Patron Attacks*****\\\\\\\
function PitcherOfBeer(){
	this.name = "Pitcher_of_Beer";
	this.patron = true;
	this.favoriteClass = "Frat_Boy";
	this.favoriteClassBonus = 1;
	this.opposingStat = "stress";
}
PitcherOfBeer.prototype = new Attack(3, 3);
///////*****Staff Attacks*****\\\\\\\

/////***Exports for Browserify***\\\\\
var patronAttacksArray = []; //push patron attacks
var staffAttacksArray = []; //push staff attacks
module.exports = {patronAttacksArray, staffAttacksArray};
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
function LemonWedges(){
	this.name = "Lemon_Wedges";
	this.patron = false;
	this.favoriteClass = "Bartender";
	this.favoriteClassBonus = 2;
	this.opposingStat = "sobriety";
	this.phrase = ` "accidentally" squeezes lemon wedges into the eyes of `;
}
LemonWedges.prototype = new Attack(3, 3);

function PoolCue(){
	this.name = "Pool_Cue";
	this.patron = false;
	this.favoriteClass = "Bouncer";
	this.favoriteClassBonus = 1;
	this.opposingStat = "sobriety";
	this.phrase = "";
}
PoolCue.prototype = new Attack(1, 5);

function TheTab(){
	this.name = "The_Tab";
	this.patron = false;
	this.favoriteClass = "Waitress";
	this.favoriteClassBonus = 3;
	this.opposingStat = "pleasure";
	this.phrase = "";
}
TheTab.prototype = new Attack(2, 4);

function GreasySpatula(){
	this.name = "Greasy_Spatula";
	this.patron = false;
	this.favoriteClass = "Cook";
	this.favoriteClassBonus = 2;
	this.opposingStat = "pleasure";
	this.phrase = "";
}
GreasySpatula.prototype = new Attack(3, 3);

function Music(){
	this.name = "Music";
	this.patron = false;
	this.favoriteClass = "Manager";
	this.favoriteClassBonus = 2;
	this.opposingStat = "pleasure";
	this.phrase = "";
}
Music.prototype = new Attack(2, 4);

var lemonWedges = new LemonWedges();
var poolCue = new PoolCue();
var theTab = new TheTab();
var greasySpatula = new GreasySpatula();
var music = new Music();

/////***Exports for Browserify***\\\\\
var patronAttacksArray = []; //push patron attacks
var staffAttacksArray = [lemonWedges, poolCue, theTab, greasySpatula, music]; //push staff attacks
module.exports = {patronAttacksArray, staffAttacksArray};
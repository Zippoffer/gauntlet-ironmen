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
	this.phrase = " chugs a pitcher of PBR, and belches in the face of "
}
PitcherOfBeer.prototype = new Attack(3, 3);

function RoundOfShots(){
  this.name = "Round_of_Shots";
  this.patron = true;
  this.favoriteClass = "Bachelorette";
  this.favoriteClassBonus = 2;
  this.opposingStat = "stress";
}
RoundOfShots.prototype = new Attack(2, 4);

function Flask(){
  this.name = "Flask";
  this.patron = true;
  this.favoriteClass = "Underage";
  this.favoriteClassBonus = 3;
  this.opposingStat = "money";
}
Flask.prototype = new Attack(3, 3);

function Darts(){
  this.name = "Darts";
  this.patron = true;
  this.favoriteClass = "Beer_Snob";
  this.favoriteClassBonus = 2;
  this.opposingStat = "money";
}
Darts.prototype = new Attack(2, 4);

function KaraokeMachine(){
  this.name = "KaraokeMachine";
  this.patron = true;
  this.favoriteClass = "The_Regular";
  this.favoriteClassBonus = 2;
  this.opposingStat = "stress";
}
KaraokeMachine.prototype = new Attack(1, 5);

var pitcherOfBeer = new PitcherOfBeer();
var roundOfShots = new RoundOfShots();
var flask = new Flask();
var darts = new Darts();
var karaokeMachine = new KaraokeMachine();

///////*****Staff Attacks*****\\\\\\\

/////***Exports for Browserify***\\\\\
var patronAttacksArray = []; //push patron attacks
patronAttacksArray.push(pitcherOfBeer, roundOfShots, flask, darts, karaokeMachine);
var staffAttacksArray = []; //push staff attacks
module.exports = {patronAttacksArray, staffAttacksArray};


"use strict";

var RNG = require("./randomNumbers.js");

function Attack(min, max) {
    this.minDamage = min;
    this.maxDamage = max;
}
///////*****Patron Attacks*****\\\\\\\
function PitcherOfBeer() {
    this.name = "Pitcher_of_Beer";
    this.patron = true;
    this.favoriteClass = "Frat_Boy";
    this.favoriteClassBonus = 1;
    this.opposingStat = "stress";
    this.attackPhrase = `patronName chugs a pitcher of PBR, and belches in the face of staffName.`;
    // this.successPhrase = `${staffName} is staggered by the stench and twists an ankle!`;
    // this.failPhrase = `But ${staffName} just had a breathmint and is unaffected by the burp!`;
}
PitcherOfBeer.prototype = new Attack(3, 3);

function RoundOfShots() {
    this.name = "Round_of_Shots";
    this.patron = true;
    this.favoriteClass = "Bachelorette";
    this.favoriteClassBonus = 2;
    this.opposingStat = "stress";
}
RoundOfShots.prototype = new Attack(2, 4);

function Flask() {
    this.name = "Flask";
    this.patron = true;
    this.favoriteClass = "Underage";
    this.favoriteClassBonus = 3;
    this.opposingStat = "money";
}
Flask.prototype = new Attack(3, 3);

function Darts() {
    this.name = "Darts";
    this.patron = true;
    this.favoriteClass = "Beer_Snob";
    this.favoriteClassBonus = 2;
    this.opposingStat = "money";
}
Darts.prototype = new Attack(2, 4);

function KaraokeMachine() {
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
function LemonWedges() {
    this.name = "Lemon_Wedges";
    this.patron = false;
    this.favoriteClass = "Bartender";
    this.favoriteClassBonus = 2;
    this.opposingStat = "sobriety";
    this.phrase = ` "accidentally" squeezes lemon wedges into the eyes of `;
}
LemonWedges.prototype = new Attack(3, 3);

function PoolCue() {
    this.name = "Pool_Cue";
    this.patron = false;
    this.favoriteClass = "Bouncer";
    this.favoriteClassBonus = 1;
    this.opposingStat = "sobriety";
    this.phrase = "";
    this.attackPhrase = `staffName threatens patronName with a pool cue.`;
    this.successPhrase = `A giant wet spot appears on the front of patronName's pants.`;
    this.failPhrase = `patronName blows pool cue chalk dust into staffName's eyes.`;
}
PoolCue.prototype = new Attack(1, 5);

function TheTab() {
    this.name = "The_Tab";
    this.patron = false;
    this.favoriteClass = "Waitress";
    this.favoriteClassBonus = 3;
    this.opposingStat = "pleasure";
    this.phrase = "";
    this.attackPhrase = `staffName pulls out the tab and brandishes it in front of patronName`;
    this.successPhrase = `patronName's credit card is declined, and has no cash!`;
    this.failPhrase = `patronName whips out their Black Card, and pays the bill happily!`;
}
TheTab.prototype = new Attack(2, 4);

function GreasySpatula() {
    this.name = "Greasy_Spatula";
    this.patron = false;
    this.favoriteClass = "Cook";
    this.favoriteClassBonus = 2;
    this.opposingStat = "pleasure";
    this.phrase = "";
    this.attackPhrase = `staffName flicks a greasey spatula in patronName's direction.`;
    this.successPhrase = `patronName is hit on the face with week-old burger grease!`;
    this.failPhrase = `patronName tastes the grease and asks for an order of whatever produced it.`;
}
GreasySpatula.prototype = new Attack(3, 3);

function Music() {
    this.name = "Music";
    this.patron = false;
    this.favoriteClass = "Manager";
    this.favoriteClassBonus = 2;
    this.opposingStat = "pleasure";
    this.phrase = "";
    this.attackPhrase = `staffName changes the house music to Slovakian Bagpipe Smooth Jazz for Pig Farmers.`;
    this.successPhrase = `patronName's ears start to bleed...heavily...like Niagara Falls.`;
    this.failPhrase = `But patronName was born in Slovakia to pig-farming parents and yells "That's my jam!"`;
}
Music.prototype = new Attack(2, 4);

var lemonWedges = new LemonWedges();
var poolCue = new PoolCue();
var theTab = new TheTab();
var greasySpatula = new GreasySpatula();
var music = new Music();

/////***Exports for Browserify***\\\\\

var patronAttacksArray = [pitcherOfBeer, roundOfShots, flask, darts, karaokeMachine];
var staffAttacksArray = [lemonWedges, poolCue, theTab, greasySpatula, music]; //push staff attacks
module.exports = {
    patronAttacksArray, staffAttacksArray
};
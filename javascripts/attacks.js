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
    this.successPhrase = `staffName is staggered by the stench and twists an ankle!`;
    this.failPhrase = `But staffName just had a breathmint and is unaffected by the burp!`;
}
PitcherOfBeer.prototype = new Attack(3, 3);

function RoundOfShots() {
    this.name = "Round_of_Shots";
    this.patron = true;
    this.favoriteClass = "Bachelorette";
    this.favoriteClassBonus = 2;
    this.opposingStat = "stress";
    this.attackPhrase = `patronName orders a round of Fireball shots for the entire bar.`;
    this.successPhrase = `staffName has to run to the store to get more Fireball, and gets a speeding ticket.`;
    this.failPhrase = `patronName coughs the spicy liquor up, and staffName laughs in patronName's face!`;
}
RoundOfShots.prototype = new Attack(2, 4);

function Flask() {
    this.name = "Flask";
    this.patron = true;
    this.favoriteClass = "Underage";
    this.favoriteClassBonus = 3;
    this.opposingStat = "money";
    this.attackPhrase = `patronName orders a soda, but pulls out a hidden flask of whiskey to liven things up (on the cheap).`;
    this.successPhrase = `staffName's stock in whiskey drops and is forced to move in with parents.`;
    this.failPhrase = `staffName sees the flask, and knocks it out of patronName's hand. `;
}
Flask.prototype = new Attack(3, 3);

function Darts() {
    this.name = "Darts";
    this.patron = true;
    this.favoriteClass = "Beer_Snob";
    this.favoriteClassBonus = 2;
    this.opposingStat = "money";
    this.attackPhrase = `patronName tries throwing darts after 8 beers and mistakes staffName's nose for a bullseye.`;
    this.successPhrase = `The errant dart misses staffName's nose, but penetrates the left eye instead.`;
    this.failPhrase = `But staffName actually has a steel plate installed after a circus accident and the dart bounces off harmlessly.`;
}
Darts.prototype = new Attack(2, 4);

function KaraokeMachine() {
    this.name = "KaraokeMachine";
    this.patron = true;
    this.favoriteClass = "The_Regular";
    this.favoriteClassBonus = 2;
    this.opposingStat = "stress";
    this.attackPhrase = `patronName delivers a tone-deaf Karaoke version of "Baby Got Back" that has dogs within a 50 mile radius running for cover.`;
    this.successPhrase = `staffName is injured when a glass explodes in their hand!`;
    this.failPhrase = `But staffName developed tenittis at Grateful Dead concerts in the '70's and can't hear a lick.`;

}
KaraokeMachine.prototype = new Attack(1, 5);

var pitcherOfBeer = new PitcherOfBeer();
var roundOfShots = new RoundOfShots();
var flask = new Flask();
var darts = new Darts();
var karaokeMachine = new KaraokeMachine();

///////*****Staff Attacks*****\\\\\\\
function LemonWedges(){
	this.name = "Lemon_Wedges";
	this.patron = false;
	this.favoriteClass = "Bartender";
	this.favoriteClassBonus = 2;
	this.opposingStat = "sobriety";
	this.attackPhrase = `staffName "accidentally" squeezes lemon juice into patronName's eyes.`;
	this.successPhrase = `Temporarily blinded, patronName makes a pass at the tall woman in the corner with the Adam's apple.`;
	this.failPhrase = `staffName is a huge Corey Hart fan and is wearing sunglasses at night. Lemon juice deflected!`;
}
LemonWedges.prototype = new Attack(3, 3);

function PoolCue() {
    this.name = "Pool_Cue";
    this.patron = false;
    this.favoriteClass = "Bouncer";
    this.favoriteClassBonus = 1;
    this.opposingStat = "sobriety";
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
    this.attackPhrase = `staffName flicks a greasy spatula in patronName's direction.`;
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
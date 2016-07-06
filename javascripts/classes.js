"use strict";

var RNG = require("./randomNumbers.js");
var specials = require("./specialAbilities.js");

//Person prototype 
function Person(){
	this.partyPoints = null;
}

//Patrons prototype with values of this.pleasure and this.sobriety
function Patron(patronPleasure, patronSobriety, minPartyPoints, maxPartyPoints){
	this.pleasure = patronPleasure;
	this.sobriety = patronSobriety;
	this.partyPoints = RNG.randomRange(minPartyPoints, maxPartyPoints);
}
Patron.prototype = new Person();

//Staff prototype with values of this.stress and this.money;
function Staff(staffStress, staffMoney, minPartyPoints, maxPartyPoints){
	this.stress = staffStress;
	this.money = staffMoney;
	this.partyPoints = RNG.randomRange(minPartyPoints, maxPartyPoints);
}
Staff.prototype = new Person();
/////***Patron classes***\\\\\
//Each with a special ability, min and max life, and class name. 
//Each has a "has-a" relationship for an attack object (i.e. this.attack = null)
//This attack is set by the user
function FratBoy(){
	this.name = "Frat_Boy"
	this.special = null;
	this.attack = null;
}
FratBoy.prototype = new Patron(11, 8, 85, 100);

/////***Staff classes***\\\\\
//Each with a special ability, min and max life, and class name. 
//Each has a "has-a" relationship for an attack object (i.e. this.attack = null)
//This attack is set by the user
function Bartender(){
	this.name = "Bartender";
	this.special = null;
	this.attack = null;
}
Bartender.prototype = new Staff(10, 13, 80, 85);

function Bouncer(){
	this.name = "Bouncer";
	this.special = null;
	this.attack = null;
}
Bouncer.prototype = new Staff(10, 9, 90, 100);

function Waitress(){
	this.name = "Waitress";
	this.special = null;
	this.attack = null;
}
Waitress.prototype = new Staff(12, 14, 75, 85);

function Cook(){
	this.name = "Cook";
	this.special = null;
	this.attack = null;
}
Cook.prototype = new Staff(10, 11, 80, 100);

function Manager(){
	this.name = "Manager";
	this.special = null;
	this.attack = null;
}
Manager.prototype = new Staff(10, 12, 75, 90);

bartender = new Bartender();
bouncer = new Bouncer();
waitress = new Waitress();
cook = new Cook();
manager = new Manager();
/////***Exports for Browserify***\\\\\
//These arrays contain all the classes for staff and patrons.
var patronClassArray = []; //push each patron class into this array
var staffClassArray = []; //push each staff class into this array
staffClassArray.push(bartender, bouncer, waitress, cook, manager);
module.exports = {patronClassArray, staffClassArray}
"use strict";

var RNG = require("./randomNumbers.js");
var specials = require("./specialAbilities.js");

//Person prototype 
function Person() {
    this.partyPoints = null;
}

//Patrons prototype with values of this.pleasure and this.sobriety
function Patron(patronPleasure, patronSobriety, minPartyPoints, maxPartyPoints) {
    this.pleasure = patronPleasure;
    this.sobriety = patronSobriety;
    this.partyPoints = RNG.randomRange(minPartyPoints, maxPartyPoints);
}
Patron.prototype = new Person();

//Staff prototype with values of this.stress and this.money;
function Staff(staffStress, staffMoney, minPartyPoints, maxPartyPoints) {
    this.stress = staffStress;
    this.money = staffMoney;
    this.partyPoints = RNG.randomRange(minPartyPoints, maxPartyPoints);
}
Staff.prototype = new Person();
/////***Patron classes***\\\\\
//Each with a special ability, min and max life, and class name. 
//Each has a "has-a" relationship for an attack object (i.e. this.attack = null)
//This attack is set by the user
function FratBoy() {
    this.name = "Frat_Boy";
    this.special = null;
    this.attack = null;
}
FratBoy.prototype = new Patron(11, 8, 85, 100);

function Bachelorette() {
    this.name = "Bachelorette";
    this.special = null;
    this.attack = null;
}
Bachelorette.prototype = new Patron(13, 10, 80, 85);

function Underage() {
    this.name = "Underage";
    this.special = null;
    this.attack = null;
}
Underage.prototype = new Patron(12, 14, 75, 85);

function Beer_Snob() {
    this.name = "Beer_Snob";
    this.special = null;
    this.attack = null;
}
Beer_Snob.prototype = new Patron(10, 14, 80, 90);

function The_Regular() {
    this.name = "The_Regular"
    this.special = null;
    this.attack = null;
}
The_Regular.prototype = new Patron(11, 11, 70, 100);

fratBoy = new FratBoy();
bachelorette = new Bachelorette();
underage = new Underage();
beer_Snob = new Beer_Snob();
the_Regular = new The_Regular();
/////***Staff classes***\\\\\
//Each with a special ability, min and max life, and class name. 
//Each has a "has-a" relationship for an attack object (i.e. this.attack = null)
//This attack is set by the user
function Bartender() {
    this.name = "Bartender";
    this.special = null;
    this.attack = null;
}
Bartender.prototype = new Staff(10, 13, 80, 85);

/////***Exports for Browserify***\\\\\
//These arrays contain all the classes for staff and patrons.
var patronClassArray = []; //push each patron class into this array
var staffClassArray = []; //push each staff class into this array
module.exports = {
    patronClassArray, staffClassArray
}
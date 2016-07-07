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

function Underage_Kid() {
    this.name = "Underage_Kid";
    this.special = null;
    this.attack = null;
}
Underage_Kid.prototype = new Patron(12, 14, 75, 85);

function Beer_Snob() {
    this.name = "Beer_Snob";
    this.special = null;
    this.attack = null;
}
Beer_Snob.prototype = new Patron(10, 14, 80, 90);

function The_Regular() {
    this.name = "The_Regular";
    this.special = null;
    this.attack = null;
}
The_Regular.prototype = new Patron(11, 11, 70, 100);

var fratBoy = new FratBoy();
var bachelorette = new Bachelorette();
var underage_Kid = new Underage_Kid();
var beer_Snob = new Beer_Snob();
var the_Regular = new The_Regular();
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

function Bouncer() {
    this.name = "Bouncer";
    this.special = null;
    this.attack = null;
}
Bouncer.prototype = new Staff(10, 9, 90, 100);

function Waitress() {
    this.name = "Waitress";
    this.special = null;
    this.attack = null;
}
Waitress.prototype = new Staff(12, 14, 75, 85);

function Cook() {
    this.name = "Cook";
    this.special = null;
    this.attack = null;
}
Cook.prototype = new Staff(10, 11, 80, 100);

function Manager() {
    this.name = "Manager";
    this.special = null;
    this.attack = null;
}
Manager.prototype = new Staff(10, 12, 75, 90);

var bartender = new Bartender();
var bouncer = new Bouncer();
var waitress = new Waitress();
var cook = new Cook();
var manager = new Manager();
/////***Exports for Browserify***\\\\\
//These arrays contain all the classes for staff and patrons.
var patronClassArray = [fratBoy, bachelorette, underage_Kid, beer_Snob, the_Regular]; //push each patron class into this array
var staffClassArray = [bartender, bouncer, waitress, cook, manager]; //push each staff class into this array
module.exports = {
    patronClassArray, staffClassArray
};
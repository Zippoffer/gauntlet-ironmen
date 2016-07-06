"use strict";

var RNG = require("./randomNumbers.js");
var specials = require("./specialAbilities.js");

//Person prototype 
function Person(points){
	this.partyPoints = points;
}

//Patrons prototype with values of this.pleasure and this.sobriety

//Staff prototype with values of this.stress and this.money;

/////***Patron classes***\\\\\
//Each with a special ability, min and max life, and class name. 
//Each has a "has-a" relationship for an attack object (i.e. this.attack = null)
//This attack is set by the user

/////***Staff classes***\\\\\
//Each with a special ability, min and max life, and class name. 
//Each has a "has-a" relationship for an attack object (i.e. this.attack = null)
//This attack is set by the user

/////***Exports for Browserify***\\\\\
//These arrays contain all the classes for staff and patrons.
var patronClassArray = []; //push each patron class into this array
var staffClassArray = []; //push each staff class into this array
module.exports = {patronClassArray, staffClassArray}
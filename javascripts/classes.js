"use strict";

var RNG = require("./randomNumbers.js");
var attacks = require("./attacks.js");
var specials = require("./specialAbilities.js");

//Person prototype which has a null value for this.life

//Patrons prototype with values of this.pleasure and this.sobriety

//Staff prototype with values of this.stress and this.money;

/////***Patron classes***\\\\\
//Each with a special ability, and class name. 
//Each has a "has-a" relationship for an attack object (i.e. this.attack = null)
//This attack is set by the user


/////***Staff classes***\\\\\
//Each with a special ability, and class name. 
//Each has a "has-a" relationship for an attack object (i.e. this.attack = null)
//This attack is set by the user


//These arrays contain all the classes for staff and patrons.
var patronClassArray = [];
var staffClassArray = [];
module.exports = {patronClassArray, staffClassArray}
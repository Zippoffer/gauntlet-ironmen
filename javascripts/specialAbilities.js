"use strict";

var RNG = require("./randomNumbers.js");

/////***Exports for Browserify***\\\\\
// patronSpecialsArray contains all functions for patron abilities.
// var funnelWingmanCall = {
// 	name: "Funnel_Wingman_Call",
// 	phrase: null,
// 	activate: function(target){
// 		this.pleaure += RNG.randomRange(1, 3);
// 		target.stress--;
// 	}
// // };
// function funnelWingMan(target){
// 	fratBopleasure += RNG.randomRange(1, 3);
// 	target.stress--;
// }


// staffSpecialsArray contains all functions for staff abilities.
var patronSpecialsArray = []; //push patron specials
var staffSpecialsArray = []; //push staff specials
module.exports = {patronSpecialsArray, staffSpecialsArray};
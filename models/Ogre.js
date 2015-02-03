'use strict'

var subclassOf = require('../util/subclassOf');
var Character = require('./Character');

function Ogre(){
	Character.apply(this, arguments);
	this.arr = [];
}
Ogre.prototype = subclassOf(Character);
Ogre.prototype.challenge = function(){
	this.arr = [];
	var i = 0;
	while(i < 3){
		var n = Math.floor((Math.random() * 10) + 1);
		this.arr.push((n % 2 === 0));
		i++;
	}
};

module.exports = Ogre;


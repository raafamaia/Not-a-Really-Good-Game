'use strict'

var subclassOf = require('../util/subclassOf');
var Equipment = require('./Equipment');

function Shield(name, resistance, defense){
	Equipment.call(this, name, resistance);
	this.defense = defense;
}
Shield.prototype = subclassOf(Equipment);

module.exports = Shield;
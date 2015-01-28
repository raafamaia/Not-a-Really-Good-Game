'use strict'

var subclassOf = require('../util/subclassOf');
var Equipment = require('./Equipment');

function Weapon(name, resistance, attack){
	Equipment.call(this, name, resistance);
	this.attack = attack;
}
Weapon.prototype = subclassOf(Equipment);

module.exports = Weapon;
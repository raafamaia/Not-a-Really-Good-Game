'use strict'

function Character(name, hp, weapon, shield, strength, defense){
	this.name = name;
	this.hp = hp;
	this.weapon = weapon;
	this.shield = shield;
	this.strength = (strength === undefined) ? 10 : strength;
	this.defense = (defense === undefined) ? 10 : defense;
}

Character.prototype = {
	constructor: Character,

	lostHP: function(dmg){
		this.hp -= dmg;
		return dmg;
	},

	attack: function(target){
		if(target instanceof Character){
			var dmg = (this.strength
			+ ((this.weapon === undefined) ? 0 : this.weapon.attack))
			- (target.defense
			+ ((target.shield === undefined) ? 0 : target.shield.defense));

			target.lostHP(dmg);
			return target.name + " received " + dmg + " damage";
		}
	},

	toString: function(){
		var message = "Hey, I'm the brave " + this.name + "\nYou better fear me fool...\n"
		+ "Why? Huh, just take a look:\n";

		for (property in this){
			if (this.hasOwnProperty(property)){
				message += "\n" + property + ": ";
				if (this[property] instanceof Equipment){
					for(prop in this[property]){
						message += prop + " - " + this[property][prop] + "\n\t\t\t\t";
					}
				} else {
					message += this[property];
				}
			}
		}
		return message;
	},
	stats: function(){
		var message = this.name + " stats: \nhp - " + this.hp;
		return message;
	}
};

module.exports = Character;
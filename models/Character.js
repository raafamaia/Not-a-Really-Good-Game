'use strict'

var Equipment = require('./Equipment');

function Character(name, hp, weapon, shield, strength, defense){
	this.name = name;
	this.hp = hp;
	this.weapon = weapon;
	this.shield = shield;
	this.strength = (strength === undefined) ? 10 : strength;
	this.defense = (defense === undefined) ? 10 : defense;
	this.totalStrength = this.weapon.attack + this.strength;
	this.totalDefense = this.shield.defense + this.defense;
	this.alive = true;
}

Character.prototype = {
	constructor: Character,

	lostHP: function(dmg){
		this.hp -= dmg;
		return dmg;
	},

	attack: function(target){
		if(target instanceof Character){
			var dmg = this.totalStrength - this.totalDefense;
			target.lostHP(dmg);
			if(target.checkDead()){
				target.alive = false;
				return "The great " + target.name + " is dead!";
			}
			return target.name + " received " + dmg + " damage";
		}
	},

	toString: function(){
		var message = "Hey, I'm the brave " + this.name + "\nYou better fear me fool...\n"
		+ "Why? Huh, just take a look:\n";
		for(var property in this){
			if (this.hasOwnProperty(property)){
				message += "\n" + property + ": ";
				if (this[property] instanceof Equipment){
					for(var prop in this[property]){
						message += prop + " - " + this[property][prop] + "\n\t";
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
	},

	checkDead: function(){
		if (this.hp <= 0){
			return true;
		}
		return false;
	}
};

module.exports = Character;
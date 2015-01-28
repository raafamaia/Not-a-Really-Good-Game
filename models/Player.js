'use strict'

var subclassOf = require('../util/subclassOf');
var Character = require('./Character');

function Player(){
	Character.apply(this, arguments);
}
Player.prototype = subclassOf(Character);

module.exports = Player;
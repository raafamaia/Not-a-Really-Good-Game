'use strict'

var subclassOf = require('../util/subclassOf');
var Character = require('./Character');

function Ogre(){
	Character.apply(this, arguments);
}
Ogre.prototype = subclassOf(Character);

module.exports = Ogre;


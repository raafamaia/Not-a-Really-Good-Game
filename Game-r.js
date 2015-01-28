 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description:
// Overall mission: Make the ogre give up!
// Goals: Make the ogre give up!
// Characters: CodeNinja and Ogre
// Objects: CodeNinja, Ogre, Sword, Shield and Pack of Cards.
// Functions: run, attack, playcards

// Pseudocode
// Create object codeninja with title, hp, sword, shield and pack of cards.
// Create object ogre with title, hp, sword and shield.
// Create object sword with atk and resistance
// Create object shield with defense and resistance
// Create object pack of cards with cardValue

// Initial Code

var Weapon = require('./models/Weapon')
var Shield = require('./models/Shield');
var Player = require('./models/Player');
var Ogre = require('./models/Ogre');

//------------------------------------------------------------------------------

var defaultWeapon = new Weapon("Sword", 5, 15);
var defaultShield = new Shield("Shield", 5, 5);
var ogre = new Ogre("Ogre", 200);
var player = new Player("You", 200, defaultWeapon, defaultShield);

//------------------------------------------------------------------------------

function Main(){
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("1 - Attack \n2 - Play Cards\n");
rl.prompt();
rl.on('line', function(line) {
    switch(line){
	  	case "1":
	  		console.log(player.attack(ogre));
	  		console.log(player.stats());
	  		console.log(ogre.stats());
	  		break;
	  	// case "2":
	  	// 	codeninja.playCards([Math.floor(Math.random() * packCards.values.length)]);
	  	// 	rl.close();
	  	// 	break;
	  	default:
	  		console.log("Opção Inválida");
	  }

}).on('close',function(){
    process.exit(0);
});
}

Main();


var mainState = {

	preload: function(){
		game.load.image('background', 'assets/background.png');
		game.load.image('player', 'assets/player.png');
		game.load.image('ground', 'assets/wallHorizontal.png');
		game.load.image('obsticle', 'assets/wallVertical.png');
	},


	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.backgroundColor = '#3498db';
		platforms = game.add.group();
    	platforms.enableBody = true;
		var ground = platforms.create(0, game.world.height - 64, 'ground');
    	ground.scale.setTo(4, 2);
    	ground.body.immovable = true;
	},
	update: function(){

	}
};


var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

game.state.add('main', mainState);
game.state.start('main');
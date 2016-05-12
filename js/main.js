
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
		game.renderer.renderSession.roundPixels = true;
		game.load.image('player', 'assets/player.png');
		this.player = game.add.sprite(game.width/8, game.height*(7/8), 'player');
		game.physics.arcade.enable(this.player);
		this.player.body.gravity.y = 500;
		platforms = game.add.group();
    	platforms.enableBody = true;
		var ground = platforms.create(0, game.world.height*(11/12), 'ground');
    	ground.scale.setTo(4, 1);
			game.physics.arcade.enable(platforms);
			game.physics.arcade.collide(this.player, platforms);
    	ground.body.immovable = true;
	},
	update: function(){

	}
};


var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

game.state.add('main', mainState);
game.state.start('main');

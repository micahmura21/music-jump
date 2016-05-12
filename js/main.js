var spaceKey;
var score = -1;

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

		platforms = game.add.group();
    	platforms.enableBody = true;

			this.ground = platforms.create(0, game.world.height, 'ground');
			this.ground.anchor.setTo(0,1);
    	this.ground.scale.setTo(4, 1);
			game.physics.arcade.enable(this.ground);
    	this.ground.body.immovable = true;


			this.player = game.add.sprite(game.width/8, game.world.height*(7/8), 'player');
			game.physics.arcade.enable(this.player);
			this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

			this.player.body.bounce.y = 0.2;
	    this.player.body.gravity.y = 300;
	    // this.player.body.this.ground = true;

			this.wall = game.add.sprite(700,game.world.height, 'obsticle');
			this.wall.scale.setTo(1,0.2);
			this.wall.anchor.setTo(0,1);
			game.physics.arcade.enable(this.wall);
			this.wall.body.immovable = true;


    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });


	},
	update: function(){
		game.physics.arcade.collide(this.player, this.ground);
		game.physics.arcade.collide(this.player, this.wall);
    this.player.body.velocity.x = 0;
		if (this.wall.x < 0) {
				console.log("new wall");
				this.wall.kill();
				this.wall = game.add.sprite(900,game.world.height, 'obsticle');
				this.wall.scale.setTo(1,0.2);
				this.wall.anchor.setTo(0,1);
				game.physics.arcade.enable(this.wall);
				this.wall.body.immovable = true;
		} else if (this.wall.x > 600) {
			this.wall.x -= 0.05;
		};

		if (this.spaceKey.isDown&&this.player.body.touching.down){
        this.player.body.velocity.y = -300;
    };

		if (this.wall.x < 5 && this.player.x > 5){
			score++;
			scoreText.text = 'score: ' + score;
		}

		if (this.player.x < 0){
			scoreText = game.add.text(350,200, 'You Lose!', { fontSize: '100px', fill: '#ff0000' });
			this.wall.kill();
		}




	}
};


var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

game.state.add('main', mainState);
game.state.start('main');

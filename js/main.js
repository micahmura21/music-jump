//This sets the variable for the spacebar.
var spaceKey;
var ground;
var player;
var obstacle;

//This sets the score to start at -1.
var score = -1;

//This is the object which runs the game.
function preload(){

    //These four things sets the assets for the game. If you want to add music or images, there is where you would preload it.
    game.load.image('background', 'assets/background.png');
    game.load.image('player', 'assets/player.png');
    game.load.image('ground', 'assets/wallHorizontal.png');
    game.load.image('obstacle', 'assets/wallVertical.png');
    //If you'd like to load music files, the format would look like this. game.load.audio('[name of music]', ['[location for music file]']);

};

function create(){

    // //This sets the game physics to Arcade style.
    // game.physics.startSystem(Phaser.Physics.ARCADE);

    // //This sets the background color to #3498db on the hex system.
    game.stage.backgroundColor = '#3498db';

    // //This gives us sharp corners for all of our images.
    // game.renderer.renderSession.roundPixels = true;

    // //This would be a good place to start the general background music for the game.

    //This sets up a group call platforms. For future functionality we can set all horizontal surfaces to this group.
    platforms = game.add.group();
    // platforms.enableBody = true;

    //This creates the ground, and makes it solid object the player will not pass through.
    ground = platforms.create(0, game.world.height, 'ground');
    ground.anchor.setTo(0,1);
    ground.scale.setTo(4, 1);
    // game.physics.arcade.enable(ground);
    // ground.body.immovable = true;

    //This creates the player character at the bottom left side of the screen.
    player = game.add.sprite(game.width/8, game.world.height*(7/8), 'player');
    // game.physics.arcade.enable(player);

    // //This sets the spacebar key as the input for this game.
    // spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    // //This sets the physics on the player in terms of the gravity and the bounce.
    // player.body.bounce.y = 0.2;
    // player.body.gravity.y = 600;

    //This creates the first obstacle on the right side of the screen.
    obstacle = game.add.sprite(700,game.world.height, 'obstacle');
    obstacle.scale.setTo(1,0.2);
    obstacle.anchor.setTo(0,1);
    // game.physics.arcade.enable(obstacle);
    // obstacle.body.immovable = true;

    // //This adds the scoreboard on the top left side of the screen.
    // scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
};

function update(){

    // //This is where the game engine recognizes collision betwen the player and the ground or the obstacle.
    // game.physics.arcade.collide(player, ground);
    // game.physics.arcade.collide(player, obstacle);

    // //This will set the horizontal movement to zero.
    // player.body.velocity.x = 0;

    // //This will create a new wall if the old wall goes off the screen.
    // if (obstacle.x < 0) {
    //   obstacle.kill();
    //   obstacle = game.add.sprite(900,game.world.height, 'obstacle');
    //   obstacle.scale.setTo(1,0.2);
    //   obstacle.anchor.setTo(0,1);
    //   game.physics.arcade.enable(obstacle);
    //   obstacle.body.immovable = true;
    // };

    // //This creates a place to add sound when the obstacle reaches the player.
    // if (obstacle.x < 20 && obstacle.x > 15) {
    //   console.log("sound!");
    //   //This is where you'd add a sound que when the obstacle reaches the player.
    // }

    // //This will move the obstacle to the left if it is on the right side of the screen.
    // if (obstacle.x > 600) {
    //   obstacle.x -= 0.05;
    // };

    // //This allows the player to jump only if you press the space key and the player is touching the something at the bottom.
    // if (spaceKey.isDown && player.body.touching.down){
    //   player.body.velocity.y = -300;
    //   //This is a good place to add the sound for when the player jumps.
    // };

    // //This will update the score if the player has not been pushed off the screen, and the wall has gone off the left side.
    // if (obstacle.x < 5 && player.x > 5){
    //   score++;
    //   scoreText.text = 'score: ' + score;
    // };

    // //This will tell you "You Lose!" if the player is pushed off the left side of the screen.
    // if (player.x < 0){
    //   scoreText = game.add.text(350,200, 'You Lose!', {fill: '#ff0000'});
    //   obstacle.kill();
    //   player.kill();
    // };
};

//This sets the size of the game screen and sets it to the div "gameDiv".
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv', { preload: preload, create: create });

//This starts the game, by running the object "mainState".
//game.state.add('main', mainState);
game.state.start();
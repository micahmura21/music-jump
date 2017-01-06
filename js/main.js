var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var GAME_CONTAINER_ID = 'gameDiv';

var mainState = {
  preload: function(){
    game.load.image('background', 'assets/background.png');
    game.load.image('player', 'assets/player.png');
    game.load.image('ground', 'assets/wallHorizontal.png');
    game.load.image('obstacle', 'assets/wallVertical.png');
  },

  create: function(){
    this.player = game.add.sprite(GAME_WIDTH/8, GAME_HEIGHT*(7/8), 'player');
    game.stage.backgroundColor = '#3498db';
    this.obstacle = game.add.sprite(700,600, 'obstacle');
    this.obstacle.scale.setTo(1,0.2);
    this.obstacle.anchor.setTo(0,1);
  },

  update: function(){

  }
}

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.Auto, GAME_CONTAINER_ID)

game.state.add('main', mainState);
game.state.start('main');
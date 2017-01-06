# music-jump
A music based jumping game made in Phaser

## Step 1

Import the **script** for the 2 files in your js directory

_Your code should look like this_
```html
  <script type="text/javascript" src="js/phaser.min.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
```

## Step 2 - Sanity Check

Run a sanity check in your **main.js** file

_Your code should look like this_

```console.log(Phaser)```

You should see this in your Console

```html
Object {VERSION: "2.6.2", GAMES: Array[0], AUTO: 0, CANVAS: 1, WEBGL: 2…}
```

## Step 3 - Set up Phaser Framework
```
var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var GAME_CONTAINER_ID = 'gameDiv';

var mainState = {
  preload: function(){

  },

  create: function(){

  },

  update: function(){

  }
}

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.Auto, GAME_CONTAINER_ID);

game.state.add('main', mainState);
game.state.start('main');
```

## Step 4 - Create Game Container
Create the **game container** in the index.html

_Your code should look like this_
```html
<div id="gameDiv"> </div>
```

This should appear in your console
```Phaser v2.6.2 | Pixi.js | WebGL | WebAudio     http://phaser.io ♥♥♥```

## Step 5 - Load the Images
Load an image into Phaser using the method **load.image** in the **game** object.

```game.load.image('NEW_ASSET_NAME', 'ASSET_FILE_LOCATION');```

_Your code should look like this for the first asset_
```html
game.load.image('background', 'assets/background.png');
```

Repeat this for these images:
+ player.png - Set this with the new asset name 'player'
+ wallHorizontal.png - Set this with the new asset name 'ground'
+ wallVertical.png - Set this with the new asset name 'obstacle'

## Step 6 - Create the Sprite For The Player
Within the **create** function, create the sprite image for the player and set as `this.player` using the method on the game object `add.sprite(START_X_POS, START_Y_POS, 'NAME_OF_SPRITE')`:

```game.add.sprite(START_X_POS, START_Y_POS, 'NAME_OF_SPRITE');```

_Your code should look like this_
```html
this.player = game.add.sprite(GAME_WIDTH/8, GAME_HEIGHT*(7/8), 'player');
```

You should have the player on the screen now.

Lets also set the **background color** to `#3498db` so the player isn't in the dark.

## Step 7 - Create the Sprites for the Obstacle
Repeat the previous step with the **obstacles** asset

_Your code should look like this_
```html
this.obstacle = game.add.sprite(700,600, 'obstacle');
```

We need to also **anchor** this sprite to the screen. We will use the sprite method `anchor.setTo(X_POS, Y_POS)` for this.

_Your code could look like this_
```html
this.obstacle.anchor.setTo(0,1);
```

Your player should now be facing a gigantic obstacle.

Lets configure the obstacle to not be so scary with the sprite method `scale.setTo(X_LENGTH, Y_LENGTH)`. The `X_LENGTH` and `Y_LENGTH` are from values 0, 1 with 1 being the original length.

_Your code could look like this_
```html
this.obstacle.scale.setTo(1,0.2);
```

Play around with these numbers to understand the positioning


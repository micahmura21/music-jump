# music-jump
A music based jumping game made in Phaser

## Part 1 - Lets Display the Graphics!

### Step 1 - Reference Executable Script

+ Use the HTML ```html<script>```element to reference the executable scripts in your **js** directory.

+ Use the global attributes **type** and **src**

##### Your code should look like this

**index.html**
```html
  <script type="text/javascript" src="js/phaser.min.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
```

### Step 2 - Sanity Check

In the **main.js** file, output the game object **Phaser** to the Web Console.

##### Your code should look like this

**main.js**

```console.log(Phaser);```

**Console**

```html
Object {VERSION: "2.6.2", GAMES: Array[0], AUTO: 0, CANVAS: 1, WEBGL: 2…}
```

### Step 3 - Set up Phaser Framework

+ You will be instantiating the Phaser.State functions (preload, create, update, and render) and set the game width, height, and element container id.in the **main.js** file

##### Your code should look like this

**main.js**

```html
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

### Step 4 - Create Game Container
Create the **game container** in the index.html

##### Your code should look like this

**index.html**

```html
<div id="gameDiv"> </div>
```

This should appear in your console
```Phaser v2.6.2 | Pixi.js | WebGL | WebAudio     http://phaser.io ♥♥♥```

### Step 5 - Load the Images
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

### Step 6 - Create the Sprite For The Player
Within the **create** function, create the sprite image for the player and set as `this.player` using the method on the game object `add.sprite(START_X_POS, START_Y_POS, 'NAME_OF_SPRITE')`:

```game.add.sprite(START_X_POS, START_Y_POS, 'NAME_OF_SPRITE');```

_Your code should look like this_
```html
this.player = game.add.sprite(GAME_WIDTH/8, GAME_HEIGHT*(7/8), 'player');
```

You should have the player on the screen now.

Lets also set the **background color** to `#3498db` so the player isn't in the dark.

### Step 7 - Create the Sprites for the Obstacle
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

### Step 8 - Create the Platform for the Player

Your player is floating! We need to create a ground for the player!

Within the **create** function, access the method `add.group()` within the game object and set it equal to `platforms`.

After, use the `create(X_POS, Y_POS, 'NAME_OF_ASSET')` method on add.group() and set this equal to `this.ground`.

You will need to anchor this.ground to the setting, how would you do this?

The ground look so short! So use a method to extend its length!

_Your code should look like this_
```html
platforms = game.add.group();
this.ground = platforms.create(0, GAME_HEIGHT, 'ground');
this.ground.anchor.setTo(0,1);
this.ground.scale.setTo(4, 1);
```

Your game now has a player, a stage, and an obstacle!

##Part 2 - Lets Add Movement!

### Step 1 - Move the Player!
Create a variable called `INITIAL_MOVESPEED` and set it to a number between 1-10.

Within the `create` function, after the creation of the player sprite, initialize the attribute `moveSpeed` on the player and set it to INITIAL_MOVESPEED.

Set the value of `spaceKey` on `this` to the **game** method `input.keyboard.addKey(Phaser.Keyboard.KEY)`.

Replace `KEY` with `SPACEBAR`.

_Your code should look like this_
```html
this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
```

And, in the **update** function, create an if statement to handle this and change the players y to -0.1.

_Your code should look like this_
```html
  update: function(){
    if (this.spaceKey.isDown) {
      this.player.y = -0.1;
    }
  }
```

Your character is able to jump!

In a very weird way :O !

### Step 2 Add "Bounce" to player!
We want the character to jump with a bounce as he just teleports to the top of the screen!

We need to add the physics engine of Phaser to our code.

Input this code at the beginning of the **create** function:
```html
game.physics.startSystem(Phaser.Physics.ARCADE);
```

This sets the game physics to arcade style.

After the area you created the ground, enable the game physics arcade with this command and pass the instantiaion of ground as a parameter:
```game.physics.arcade.enable(this.ground);```

Also, we want the ground to be solid so the player doesn't fall through it on landing.
```this.ground.body.immovable = true;```

Lets enable the game physics arcade for the player and obstacle.

Lets give the player a bit of a bounce with:

this.player.body.bounce.y = 0.2;

And change what happens to the player when spacebar is entered within the update function:

And add the `physics.arcade.collide` between the objects that are coming in contact

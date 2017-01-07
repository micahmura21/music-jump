# music-jump
A music based jumping game made in Phaser

## Part 1 - Lets Display the Graphics!

### Step 1 - Reference Executable Script

+ Use the HTML ```<script>```element to reference the executable scripts in your **js** directory.

+ Use the global attributes **type** and **src**

#### Your code should look like this

**index.html**
```html
  <script type="text/javascript" src="js/phaser.min.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
```

### Step 2 - Sanity Check

In the **main.js** file, output the game object **Phaser** to the Web Console.

#### Your code should look like this

**main.js**

```html
console.log(Phaser);
```

**Console**

```html
Object {VERSION: "2.6.2", GAMES: Array[0], AUTO: 0, CANVAS: 1, WEBGL: 2…}
```

### Step 3 - Set up Phaser Framework

+ You will be instantiating the Phaser.State functions (preload, create, update, and render) and set the game width, height, and element container id.in the **main.js** file

#### Your code should look like this

**main.js**

```html
var spaceKey;
var ground;
var player;
var obstacle;

var score = -1;


var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var GAME_CONTAINER_ID = 'gameDiv';

//This is the object which runs the game.
function preload(){

},

function create(){

};

function update(){

};

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv', { preload: preload, create: create });

game.state.start();
```

### Step 4 - Create Game Container
Create the **game container** in the index.html

#### Your code should look like this

**index.html**

```html
<div id="gameDiv"> </div>
```

This should appear in your console
```Phaser v2.6.2 | Pixi.js | WebGL | WebAudio     http://phaser.io ♥♥♥```

### Step 5 - Load the Images
Use the game load operation to load an image file:

**In the preload()**

The first parameter is a unique key and the second is a url path

```game.load.image('imageKey', 'assets/fileName.png');```

Then add the sprite image in the **create** function

```game.add.sprite(X_POS, Y_POS, 'imageKey');```

Use this to add the player sprite to the game.

Load these images:
+ player.png - Set the image key to 'player'
+ wallHorizontal.png - Set the image key to 'ground'
+ wallVertical.png - Set the image key to 'obstacle'

We need to also **anchor** these sprites to the screen. We will use the sprite method `anchor.setTo(X_POS, Y_POS)` for this.

Your player should now be facing a gigantic obstacle.

Lets configure the obstacle to not be so scary with the sprite method `scale.setTo(X_LENGTH, Y_LENGTH)`. The `X_LENGTH` and `Y_LENGTH` are from values 0, 1 with 1 being the original length.

##### Your code should look like this

**main.js**

```html
function preload(){
  game.load.image('background', 'assets/background.png');
  game.load.image('player', 'assets/player.png');
  game.load.image('ground', 'assets/wallHorizontal.png');
  game.load.image('obstacle', 'assets/wallVertical.png');
}

function create() {
  player = game.add.sprite(game.width/8, game.world.height*(7/8), 'player');
  obstacle = game.add.sprite(700,game.world.height, 'obstacle');
  obstacle.scale.setTo(1,0.2);
  obstacle.anchor.setTo(0,1);
}
```

Play around with these numbers to understand the positioning

Lets also set the game stage **background color** to `#3498db` so the player isn't in the dark.

### Step 8 - Create the Platform for the Player

Your player is floating! We need to create a ground for the player!

Within the **create** function, access the method `add.group()` within the game object and set it equal to `platforms`.

After, use the `create(X_POS, Y_POS, 'NAME_OF_ASSET')` method on add.group() and set this equal to `this.ground`.

You will need to anchor this.ground to the setting, how would you do this?

The ground look so short! So use a method to extend its length!

##### Your code should look like this_
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

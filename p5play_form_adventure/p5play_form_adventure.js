let bg;

var sheriff;
var bullet;
var enemy;


function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('assets/Background.jpg');
  createCanvas(800, 475); 


sheriffImage = loadImage('assets/SheriffModHojre.png');

sheriff = createSprite(width/2, height/1.57); 
sheriff. addAnimation('assets/SheriffModHojre.png','assets/SheriffModVenstre.png');
}

function draw() {
  background(bg);
  
  drawSprite(sheriff);
  
}

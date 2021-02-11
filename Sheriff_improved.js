let bg;
var bulletPic;
var mode = 0;
var sheriff;
var enemy;
var enemyGroup;
var shots;
var facing= 1;

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('assets/Background.jpg');
  createCanvas(800, 475); 
bulletPic = loadImage('assets/bullet.png');
sheriffImage = loadImage('assets/SheriffModHojre.png');

sheriff = createSprite(width/2, height/1.57); 
sheriff. addAnimation('assets/SheriffModHojre.png','assets/SheriffModVenstre.png');

shots=new Group();
//shotsImage = loadImage('assets/Bullet.png')
enemyGroup = new Group();
enemyImage = loadImage('assets/SheriffModVenstre.png');
enemy = createSprite(700, height/1.57);
enemy.setCollider("rectangle"); //i manglede at sætte en collider på enemy og bullet
enemy.addImage(enemyImage);
enemy.setVelocity(-1,0);
enemyGroup.add(enemy);

}

function draw() {
  background(bg);
  enemyGroup.overlap(shots, enemyHit);
  
  //drawSprite(enemy);
  
 // drawSprite(sheriff);
 // shots.draw();
 drawSprites();
 spawnEnemy();
}

function keyPressed() {
  print(keyCode);
  if(keyCode==68){
  sheriff.mirrorX(-1);
  facing = -1;
}

  if(keyCode==65){
    sheriff.mirrorX(1);
    facing = 1;
  }
}
function mousePressed() {
 var bullet = createSprite(width/2, height/1.53,5,5);
 bullet.addImage(bulletPic);
 bullet.setCollider("circle", 0,0,2); // collider på bullet
 if(facing == 1){
bullet.setVelocity(-3,0);}
else{bullet.setVelocity(3,0);}
shots.add(bullet);

}

function enemyHit(enemy, bullet) {
  enemy.remove();
  bullet.remove();
 
}


function spawnEnemy(){
if(frameCount%150 == 0){
enemy = createSprite(700, height/1.57);
enemy.setCollider("rectangle"); //i manglede at sætte en collider på enemy og bullet
enemy.addImage(enemyImage);
enemy.setVelocity(-1,0);
enemyGroup.add(enemy);
}else if(frameCount%155 == 0){
enemy = createSprite(0, height/1.57);
enemy.setCollider("rectangle"); //i manglede at sætte en collider på enemy og bullet
enemy.addImage(enemyImage);
enemy.mirrorX(-1);
enemy.setVelocity(1,0);
enemyGroup.add(enemy);


}

}

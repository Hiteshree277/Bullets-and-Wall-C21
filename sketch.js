var bullet;
var wall,thickness;
var speed;
var weight;



function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50,200,17,5);
  bullet.shapeColor=color(0);
  wall=createSprite(1500,200,thickness,height/2);

  
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

}

function draw() {
  background(255);  
  bullet.velocityX=speed;
  //bullet.collide(wall);

if(collide(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){
  wall.shapeColor=color(255,0,0);
}

if(damage<10){
  wall.shapeColor=color(0,255,0);
}


}

  drawSprites();
}

function collide(bullet,wall){

bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true 
}
return false;


}
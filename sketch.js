var bullet, wall,thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor=("white")
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80)
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  thickness=random(22,83)
}



function draw() {
  background("blue");  
  drawSprites();
  if(wall.x-bullet.x <(bullet.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }
  }
}
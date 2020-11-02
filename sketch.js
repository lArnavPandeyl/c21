var car;
var wall;
var speed;
var weight;
var deformation;
var thickness;



function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, thickness, 200);
  wall.shapeColor = "black"

  thickness = random(22,83)
  
  speed = random(223,331);
weight =random(30,52)

  car = createSprite(200,200,50,20);
  car.velocityX = speed;
  car.shapeColor = "white"




deformation = 0.2* weight * speed * speed / wall.width * 3

}

function draw() {
  background(30,20,100);  

  if(wall.x- car.x < car.width/2 + wall.width/2 ) {
    car.velocityX = 0;
if( car.y - wall.y + car.height/2 + wall.height/2 && deformation  < 25000.43)  {
car.shapeColor = "green"}

 if(deformation > 20000.43 ){
    car.shapeColor = "red"
  }



  }


car.depth = wall.depth + 1


  drawSprites();
}
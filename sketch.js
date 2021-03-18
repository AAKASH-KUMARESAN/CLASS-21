var ball1
var ball2
var ball3
var ball4
function setup() {

  createCanvas(800,400);
 ball1= createSprite(400, 200, 50, 50);
  ball1.shapeColor = "red"

  ball2 = createSprite(400,350,50,50)
  ball2.shapeColor = "red"

  ball3 = createSprite(400,50,50,50)
ball3.shapeColor = "blue"

  ball4 = createSprite(400,375,50,50)
  ball4.shapeColor = "yellow"



}

function draw() {
  background("black");  

  ball2.x = World.mouseX;
  ball2.y = World.mouseY;



  if(isTouching(ball2,ball4)){
    ball4.shapeColor = "green"
    ball2.shapeColor = "green"


  }
  else{

    ball4.shapeColor = "yellow"
    ball2.shapeColor = "red"

  }
  drawSprites();
}




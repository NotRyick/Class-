var fixedRectangle , movingRectangle , fixedRectangle2 , fixedRectangle3 , edges 


function setup() {
  createCanvas(800,400);
  
  fixedRectangle = createSprite(400,200,30,20)
  fixedRectangle.shapeColor=("magenta")

  movingRectangle = createSprite(300,300,20,30)
  movingRectangle.shapeColor=("magenta")
  movingRectangle.velocityX = 2
  movingRectangle.velocityY = -2

  fixedRectangle2 = createSprite(200,200,30,20)
  fixedRectangle2.shapeColor=("blue")
 

  fixedRectangle3 = createSprite(300,150,20,30)
  fixedRectangle3.shapeColor=("aqua")
  fixedRectangle3.velocityX =-3
  fixedRectangle3.velocityY = 3

  edges = createEdgeSprites();
}

function draw() {
  background("black");  

//movingRectangle.x = mouseX
//movingRectangle.y = mouseY

console.log(movingRectangle.x-fixedRectangle.x)


 if  (isTouching(movingRectangle , fixedRectangle2)) {
  movingRectangle.shapeColor=("white")
  fixedRectangle2.shapeColor=("white")

  //fixedRectangle2.velocityX = 2
 // fixedRectangle2.velocityY = 2
}
else {
  fixedRectangle2.shapeColor=("magenta")
  movingRectangle.shapeColor=("magenta")
  
  fixedRectangle2.velocityX = 0
  fixedRectangle2.velocityY = 0
 }

bounceOff(movingRectangle , fixedRectangle3);
movingRectangle.bounceOff(edges)
fixedRectangle3.bounceOff(edges)
  drawSprites();
} 


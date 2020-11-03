var fixedrect,movingrect
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200,200,43,35);
  a=createSprite(300,200,40,40)
  a.shapeColor="red"
  a.velocityX=-0.5
  fixedrect.velocityX=0.5
}

function draw() {
  background(255,255,255); 
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(isTouching(a,movingrect)){
    a.shapeColor="blue"
    movingrect.shapeColor="blue"
  }
  else{
    a.shapeColor="green"
    movingrect.shapeColor="green"
  }
  bounceOff(a,fixedrect)
  drawSprites();
}
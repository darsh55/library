var fixedRect, movingRect;
var extrarect1, extrarect2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  extrarect1= createSprite(20,200,30,80);
  extrarect1.velocityX=5;
  extrarect2= createSprite(700,200,80,80);
  extrarect2.velocityX=-5;
  //movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

}

function draw() {
  background(0,0,0);
  movingRect.x=  mouseX;
  movingRect.y=  mouseY;
bounceOff(extrarect1,extrarect2);
  var result = isTouching(fixedRect,movingRect);
  drawSprites();
}

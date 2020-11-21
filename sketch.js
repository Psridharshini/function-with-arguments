var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  // rect1 = createSprite(100,100,50,50);
  // rect1.shapeColor = 'orange';

  // rect2 = createSprite(200,100,50,50);
  // rect2.shapeColor = 'orange';

  movingRect.velocityY = 5;
  fixedRect.velocityY = -5
}

function draw() {
  background(0, 0, 0);
bounceOff (movingRect, fixedRect);
  drawSprites();
}






 // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  // if(isTouching(movingRect, rect2)){
  //   movingRect.shapeColor = "blue";
  // rect2.shapeColor = "blue";
  // }else{
  //   movingRect.shapeColor = "green";
  // rect2.shapeColor = "orange";
  // }
  // if(isTouching(movingRect, rect1)){
  //   movingRect.shapeColor = "blue";
  // rect1.shapeColor = "blue";
  // }else{
  //   movingRect.shapeColor = "green";
  // rect1.shapeColor = "orange";
  // }

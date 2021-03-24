
var fixedRect, movingRect;
var a,b;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  a=createSprite(100,100,50,50);
  a.shapeColor="cyan";
  a.velocityX=4;
  
  b=createSprite(700,100,50,100);
  b.shapeColor="brown";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(a,b)){
    a.velocityX=0;
    a.shapeColor="pink";
    b.shapeColor="lightgreen";
    b.velocityY=-2;
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}



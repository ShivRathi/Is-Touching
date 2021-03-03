var fixedRect,movingRect;



function setup() {
  createCanvas(800,400);
  
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(50,80,80,30);
  movingRect.shapeColor="yellow";
}

function draw() {
  background(0);  

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 && 
  movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2){
  movingRect.shapeColor="green";
}

else{
movingRect.shapeColor="yellow";
}






  drawSprites();
}






































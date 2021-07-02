
function preload(){
ship_Img = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_Img = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(0,0,300,400);
 sea.addImage(sea_Img);


 sea.velocityX = -2;
 ship = createSprite (150,200,20,20);
 ship.addAnimation("sailing",ship_Img);
 ship.scale = 0.3;
 
 
 
}

function draw() {
  background("blue");
   if (sea.x < 10) {
      sea.x = sea.width/2;
   
  
     

  }

 drawSprites();
}
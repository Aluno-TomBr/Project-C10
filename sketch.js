var sea,ship,barco;
var seaImg,shipImg1,barcoImg1;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1_2.png","ship-1_2.png",
                            "ship-2_2.png","ship-1_2.png");
  barcoImg1 = loadAnimation("barco-2_1.png","barco-2_1.png",
                           "barco-2_2.png","barco-2_1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Movendo o fundo
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.x = sea.width/8;
  sea.scale=2.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);

  barco = createSprite(140,340,30,30);
  barco.addAnimation("movingBarco",barcoImg1);

  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  
  //código para redefinir o fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    
  drawSprites();
}
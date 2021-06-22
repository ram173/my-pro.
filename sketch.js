var nickol, markD, Zarko, BigB;
var ground;
var NickolImage, MarkDImage, ZarkoImage, BigBImage, nickolAttcImage, groundImage,BackgroundImage;
var nickolfire,BigBfire;
var edge
var bg

function preload(){
 NickolImage=loadImage("nickol.png");
 MarkDImage=loadImage("MarkD.png");
 ZarkoImage=loadImage("Zarko.png");
 BigBImage=loadImage("BigB.png");
 nickolAttcImage=loadImage("nickolAttc.png");
 groundImage=loadImage("ground.png");
 markDImage=loadImage("markAttc.png");
 zarkoAttcImage=loadImage("zarkoAttc.png");
 bigbAttcImage=loadImage("BigBAttc.png");
 BackgroundImage=loadImage("darkBG.png");
}
function setup() {
  createCanvas(1200,400);

  bg=createSprite(0,0,2400,600);
  bg.addImage(BackgroundImage);
  bg.scale=3;

  nickol=createSprite(100, 270, 50, 50);
  nickol.addImage(NickolImage);
  nickol.scale=0.3;
  
  markD=createSprite(300,295,50,50);
  markD.addImage(MarkDImage);
  markD.velocityY=-3;

  Zarko=createSprite(500,295,50,50);
  Zarko.addImage(ZarkoImage);
  Zarko.velocityY=-3.5;

  BigB=createSprite(900,295,50,50);
  BigB.addImage(BigBImage);
  BigB.scale=0.8;
  BigB.velocityY=-4;

  ground=createSprite(600,370,2400,20);
  ground.addImage(groundImage);

  edge = createEdgeSprites();

  nickolfire=createSprite(180,275,20,20);
    nickolfire.addImage(nickolAttcImage);
    nickolfire.scale=0.5;
}

function draw() {
  background("darkblue");  
  nickol.collide(ground);   
  if(keyDown("space")){
    nickol.velocityY=-3
  };
  nickol.velocityY=nickol.velocityY+1.3

  BigB.bounceOff(edge);
  Zarko.bounceOff(edge);
  markD.bounceOff(edge);
  
  if(BigB.bounceOff(ground)){
    BigBfire=createSprite(800,295,30,30);
    BigBfire.addImage(bigbAttcImage);
    BigBfire.scale=0.2;
    BigBfire.velocityX=-6
  }

if (keyDown("r")){
  if(frameCount%25===0){
    nickolfire=createSprite(180,275,20,20);
    nickolfire.addImage(nickolAttcImage);
    nickolfire.scale=0.5;
    nickolfire.velocityX=+6
  }
}
nickolfireSpawn();
if(BigBfire.isTouching(nickol)){
  BigBfire.visible=false
} 
  drawSprites();
}

function nickolfireSpawn(){
  if(nickolfire.isTouching(BigB)||nickolfire.isTouching(Zarko)||nickolfire.isTouching(markD)){
    nickolfire.visible=false;
  }
}
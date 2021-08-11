const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thief_run,thief;
var bg,bg2;
var p_s,ps
var di,d;
var s,si
var bs,bsi
var sSound;
var log1,log2
var shoot 
var psci,pscil,pscit,psc,pscl,psct;
var a1i,a2i,a3i,a4i;

var gameState=0;
function preload(){
 //load your images here 
 thief_run=loadAnimation("t1.png","t2.png","t3.png","t4.png","t5.png","t6.png","t7.png","t8.png","t9.png","t10.png","t11.png","t12.png","t13.png","t14.png","t15.png","t16.png","t17.png","t18.png","t19.png","t20.png")
  bg=loadImage("m.jpg")
  di=loadImage("d.png")
  bg2=loadImage("r.jpg")
si=loadImage("soldior.png")
bi=loadImage("bullet.png")
bsi=loadImage("bs.png")
sSound=loadSound("s.mp3")
shoot=loadSound("shoot.mp3")

psci=loadImage("p2.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
    world = engine.world;


  thief=createSprite(40,360,30,30);
  thief.addAnimation("run",thief_run);
  thief.scale=0.4;
  thief.velocityX=+2;
  d=createSprite(1086,65,30,30);
  d.addImage(di);
  d.scale=.2;
  
  
 

  b=createSprite(177,600,10,10)
  b.addImage(bi);
  b.scale=0.1;
  b.visible=false;

  


 

  bs=createSprite(1300,300,30,30);
  bs.addImage(bsi);
  bs.scale=0.8;
  bs.velocityX=-2;
  bs.visible=false;

 
  



  

  psc=createSprite(100,580,30,30);
  psc.addImage(psci);
  psc.scale=1.2;
  

  
  log4 =  new Log(670,640,2000,-PI/2);
 
  //add code here

}
function draw() {
background(bg)
  //add code here
  Engine.update(engine);
  
 
  text(mouseX+','+mouseY,mouseX,mouseY);
  
 
 log4.display();
 

if(gameState===0 && thief.isTouching(d)){
sSound.play();
d.visible=false;
  gameState=1;
}

 if(gameState===1 && keyDown("space")){
b.visible=true;
b.velocityX=100;
shoot.play();

 }

 if(b.isTouching(thief)){
bs.visible=true;
thief.visible=false;
thief.velocityX=0;
d.velocity=-2
}
if(keyDown("right")){
  psc.addImage(psci)
  psc.x=psc.x+5
}
if(keyDown("left")){
  psc.addImage(pscil)
  psc.x=psc.x-5
}
if(keyDown("up")){
psc.y=psc.y-5

}

if(keyDown("down")){
  psc.y=psc.y+5
  
  }
textSize(20);
fill("blue")
text("!!!!theif is stealing the diamond you are the soldior please shoot him press space key to shoot !!!!",500,110 );
drawSprites();
}
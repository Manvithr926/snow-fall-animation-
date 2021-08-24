const Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
   var backgroundImg
   
   function preload(){
   backgroundImg=loadImage("snow1.jpg")
   
   }
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}
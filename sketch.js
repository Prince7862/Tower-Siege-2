
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Body = Matter.Body
const Constraint = Matter.Constraint

var engine,world
var ground1,ground2,b1,b2,b3,b4,
b5,b6,b7,b8,b9,b10,b11,b12
,b13,b14,slingshot,polygon;

function setup() {
  createCanvas(900,500);
engine = Engine.create()
world = engine.world



ground1 = new Ground(390,300,150,20);
ground2 = new Ground(690,150,150,20);
b1 = new Box(344,250,30,30)
b2 = new Box(375,250,30,30)
b3 = new Box(405,250,30,30);
b4 = new Box(436,250,30,30);
b5 = new Box(375,270,30,30);
b6 = new Box(405,270,30,30);
b7 = new Box(390,220,30,30);
b8 = new Box(640,100,30,30);
b9 = new Box(670,100,30,30);
b10 = new Box(700,100,30,30);
b11 = new Box(730,100,30,30);
b12 = new Box(670,50,30,30);
b13 = new Box(700,50,30,30);
b14 = new Box(685,25,30,30);
polygon = new Polygon(50,400,40);
slingshot = new Slingshot(polygon.polygon,{x:200, y:200});

}



function draw() {
  background(255,255,255);  
  Engine.update(engine);


  ground1.display();
  ground2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  polygon.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon.polygon)
  }
}
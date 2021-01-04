//const is used for createing fixed values 

const Engine = Matter.Engine; 
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground, box1, box2 

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
 ground = new Ground (600,380,1200,20)
 box1 = new Box (700,320,70,70)
 box2 = new Box (900,320,70,70)
 pig1 = new Pig (810,350,50,50) 
 bird1 = new Bird (100,100,50,50)
 log1 = new Log (800,300,20,300,PI/2)

}

function draw(){
    background(0);
    Engine.update(engine);
  ground.display ()  
  box1.display ()
  pig1.display ()
  box2.display ()
  bird1.display ()
  log1.display ()
}
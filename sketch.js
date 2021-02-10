const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var ground,box,box2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var option = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,400,400,20,option)
  console.log(box);
  World.add(world,ground);

  box=new Box(210,200,50,80);
  box2=new Box(200,240,50,80);
 
}

function draw() {
  
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400,20);
  
  box.display();
  box2.display();
}
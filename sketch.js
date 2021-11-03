const Engine = Matter.Engine 
const Bodies = Matter.Bodies 
const World = Matter.World 
var engine, ball, world
var ground 

function setup() {
  createCanvas(400,400);
  engine = Engine. create()
  world = engine. world 
  var options = {
    restitution : 1.0
  }
  ball = Bodies.circle (200,200,30,options)
  World.add(world,ball)
  var ground_opt = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,200,20,ground_opt)
  World.add(world,ground)

  
}

function draw() {
  background(255,255,255);  

  Engine. update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)


}



























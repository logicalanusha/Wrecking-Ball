const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball, rope, box1, box2, box3, box4, box5;


function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(600, 780, 1200, 20);
box1 = new Box (900, 100, 300, 100);
box2 = new Box (900, 100, 300, 100);
box3 = new Box (900, 100, 300, 100);
box4 = new Box (900, 100, 300, 100);
box5 = new Box (900, 100, 300, 100);

ball = new Ball (200, 200, 200, 200);
rope = new Rope (ball.body, {x:500, y:50});
}

function draw() {
  background(180);
  Engine.update(engine);
 

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

ball.display();
rope.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}



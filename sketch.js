const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var blower;
var blowerMouth;
var button;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80,80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);

  button = createButton("Click to blow");
  button.position(width/2, height-100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background("black");  
  Engine.update(engine);
  ball.show();
  blower.show();
  blowerMouth.show();

  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
}
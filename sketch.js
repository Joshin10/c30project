const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,platform
var engine, world;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,395,10,2000);
    platform = new Ground(600,290,10,600);
    box1=new box1(610,290,50,50);
    box2=new box2(620,290,50,50);
    box3=new box3(630,290,50,50);
    box4=new box4(615,270,50,50);
    box5=new box5(625,270,50,50);
    box6=new box6(622.5,250,50,50);
    

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
   ground.display();
   platform.display();
   box1.display();
   box2.display();
   box3.display();
   box5.display();
   box6.display();

}


const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world;
var ground,ball,plank1,plank2,plank3;

function setup(){
    engine=Engine.create();
    world=engine.world;

    var canvas=createCanvas(1200,400);
    ground=new Ground(600,375,1200,50);

    var bOptions={
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
        'isStatic':false
    
    }
    ball=Bodies.circle(200,200,10,bOptions);
    World.add(world,ball);
    
   

    plank1=new Plank(800,270,20,150);
    plank2=new Plank(1000,270,20,150);
    plank3=new Plank(900,340,200,20);
}

function draw(){
    background(123,145,234);
    ground.display(181,101,29);
    ellipseMode(RADIUS);
    fill("red");
    ellipse(ball.position.x,ball.position.y,10,10);

    
    plank1.display(0,0,0);
    plank2.display(0,0,0);    
    plank3.display(0,0,0);

    Engine.update(engine);

   
    
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball,ball.position,{x:20,y:-16});
    }
}


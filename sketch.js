const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubberBody, iron;


function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(windowWidth/2,height,windowWidth,20);
    wall1= new Plane(0,windowHeight/2,20,windowHeight);
    wall2= new Plane(windowWidth,windowHeight/2,20,windowHeight);
    ceiling= new Plane(windowWidth/2,0,windowWidth,20)
    hammer= new Hammer(10,100);

    rubber= new Rubber(windowWidth/4,windowHeight-100,50);
    stone= new Stone(2*windowWidth/4, windowHeight-100, 100,50);
    iron= new Iron(3*windowWidth/4, windowHeight-100, 100,100);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    //if(rubberBody.position.x> windowWidth || rubberBody.position.x<0 || rubberBody.position.y>windowHeight || rubberBody.position.y < 0){
    //    rubberBody.position.x= windowWidth/3
    //    rubberBody.position.y= windowHeight-100
    //}


    plane.display();
    wall1.display();
    wall2.display();
    ceiling.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();

    
 
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(320,200,400,30);
	bob1 = new Bob(160,400,35);
	bob2 = new Bob(230,400,35)
	bob3 = new Bob(300,400,35);
	bob4 = new Bob(370,400,35)
	bob5 = new Bob(440,400,35);

	
}


function draw() {
  background("grey");
  Engine.update(engine);

  
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}




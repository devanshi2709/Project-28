
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

var world;

var tree1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	tree1= new tree(400,400,30,30);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	/*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });*/

	Engine.run(engine);
//	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	tree1.display();
  
  drawSprites();
 
}




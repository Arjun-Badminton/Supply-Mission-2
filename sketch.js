var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3, render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 650, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true,restitution: 0.4,friction:0.5});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	box1 = new Box(320,600,20,100);
	box2 = new Box(430,640,200,20);
	box3 = new Box(530,600,20,100);

	render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 800,
		  height: 700,
		  wireframes: false
		}
	  });
	  
	  
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+";"+mouseY,150,20);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y; 
   
 box1.display();
 box2.display();
 box3.display();

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}
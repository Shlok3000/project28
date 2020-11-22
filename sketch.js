
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var stoneObj, mango1, mango2, mango3, mango4, mango5; 
var ground, tree;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj=new Stone(235,420,30,30); 
	tree=new Tree(500,600,30,30);
	mango1=new Mango(400,500,30,30);
	mango2=new Mango(420,530,30,30);
	mango3=new Mango(430,540,30,30);
	mango4=new Mango(450,520,30,30);
	mango2=new Mango(450,500,30,30);
	boy=new Boy(100,600,30,30);
	ground=new Ground(400,800,1200,height);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stoneObj.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  ground.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(boy.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    stoneObj.fly();
}

function detectollision(Lstone,Lmango){
mangoBodyPosition=Lmango.body.position
stoneBodyPosition=Lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r)
	{
		Matter.Body.setStati(lmango.body,false);		
	}
}

function keyPressed(){
	if(keyCode === 32){
		MatterBody.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}
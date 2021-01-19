
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;


	roofObject=new Roof(800,175,225,20);

	bobObject1=new Bob(720,675,20);
	bobObject2=new Bob(760,675,20);
	bobObject3=new Bob(800,675,20);
	bobObject4=new Bob(840,675,20);
	bobObject5=new Bob(880,675,20);

	rope1=new rope(bobObject1.body,roofObject.body,-80,0)
	rope2=new rope(bobObject2.body,roofObject.body,-40,0)
	rope3=new rope(bobObject3.body,roofObject.body,0,0)
	rope4=new rope(bobObject4.body,roofObject.body,40,0)
	rope5=new rope(bobObject5.body,roofObject.body,80,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  roofObject.display()

  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()


  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}


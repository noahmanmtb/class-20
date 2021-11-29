const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body
 

var engine,world,ball,ground


function setup(){
createCanvas(400,400)
engine=Engine.create()
world=engine.world
var balloptions={
restitution:0.95
}
var groundoptions={
isStatic:true
}
ball =Bodies.circle(100,10,20,balloptions)
World.add(world,ball)
ground=Bodies.rectangle(0,380,700,20,groundoptions)
World.add(world,ground)

}
  
function draw () {
background("black")
Engine.update(engine)
ellipse(ball.position.x,ball.position.y,20)
rect(ground.position.x,ground.position.y,700,20)



}






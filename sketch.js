var jaxon
var road




function preload(){
  //pre-load images
  jaxonrun = loadAnimation("Runner-1.png","Runner-2.png")
  roadimage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200,200)
  road.addImage(roadimage)
  road.velocityY = 10

  jaxon = createSprite(200,200,50,50);
  jaxon.addAnimation("running",jaxonrun);
  jaxon.scale = 0.1

}


function draw() {
  background("black");
  drawSprites()
jaxon.x = mouseX

  if(road.y > 400){
    road.y = height/2
  }
}

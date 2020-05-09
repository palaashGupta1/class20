var block1,block2;
function setup() {
  createCanvas(800,400);
  block1 = createSprite(400, 200, 50, 50);
  block2 = createSprite(400,200,50,50);
  block1.shapeColor="green";
  block2.shapeColor="red";
}

function draw() {
  background(0);
    block2.y = mouseY;
    block2.x = mouseX;

    if(block1.x-block2.x<block1.width/2+block2.width/2 && block2.x-block1.x<block1.width/2+block2.width/2 && block1.y-block2.y<block1.height/2+block2.height/2 && block2.y-block1.y<block1.height/2+block2.height/2){
  block1.shapeColor="yellow";

    }
    else{
      block1.shapeColor="green";
    }
  drawSprites();
}
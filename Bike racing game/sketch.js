var bg , bgImage;


function preload() {
  bgImage = loadImage("track1.png")
}




function setup() {
  createCanvas(displayWidth,displayHeight-100);
// bg =  createSprite(width/2, 200, 1000, 1000);
// bg. addImage("track",bgImage);

}

function draw() {
  background(bgImage);
  image(bgImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
  drawSprites();
}
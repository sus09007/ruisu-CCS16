var stepX, stepY;
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
colorMode(HSB, width, height, 100);
stepX = mouseX+2;
stepY = mouseY+2;
background(0);
for(var y=0; y<height; y+=stepY){
  for (var x=0; x<width; x+=stepX){
    noStroke();
    rect(x,y,stepX, stepY);
    fill(x,height - y, 100);
    rect(x,y, stepX, stepY);
  }
}
}
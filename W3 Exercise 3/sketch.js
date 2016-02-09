function setup() {
  createCanvas(500,500);
  
}

function draw() {
  var x=0;
  var y=0;
  background(45,43,130);
  stroke(255);
  beginShape(LINES);
  while(x<width && y<height){
    vertex(x,y);
    x+=random(20);
    y+=random(20);
  }
  endShape();
}

function setup() {
  createCanvas(500,500);
  
}

function draw() {
  var x=0;
  var y=0;
  background(255,178,102);
  stroke(255);
  beginShape(LINES);
  while(x<width && y<height){
    vertex(x,y);
    x+=random(20);
    y+=random(20);
  }
  endShape();
  
  var z=0;
  for(z=0; z<=500; z+=5){
    line(0,z, 500,z);}
  
}

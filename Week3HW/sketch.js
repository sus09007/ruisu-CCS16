function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,103,178);
  
}

function draw() {
    var x=0;
    var y=0;
    //background line
  for (x=0; x<=windowWidth; x+=5){
    line(0,x,windowHeight,x);
  }
  for (y=0; y<= windowWidth; y+=5){
    line(windowHeight,y,0,y+42);
  }
}
var x = 25;
var h = 20;
var y = 25;


function setup(){
  createCanvas(480,120);
  background(201,235,243);
  noStroke();
}

function draw() {
  x = 20;
  rect(x,y,300,h);
  fill(251,138,188);
   x = x + 100;
  rect(x, y+h, 300, h);
    fill(255,224,238);
    x = x - 250;
rect(x,y+h*2, 300,h);
 fill(246,13,117);
}
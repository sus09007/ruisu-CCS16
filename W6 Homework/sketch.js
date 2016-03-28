var angle = 0.0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  noStroke();
  fill(180,168,0);
  drawRotationAngle();
  
  translate(width/3,height/3);
  triangle(0,50,-25,-15,25,-15);
  
  fill(0,255,0);
  angle = map(mouseX, 0,width, 0,360);
  rotate(radians(angle));
  triangle(0,50,-25,-15,25,-15);
  
  
}

function drawRotationAngle(){
  arc(40,height-40,40,40,0,radians(angle));
  text("angle (degrees): "+ int(angle), 100,height-40);
}
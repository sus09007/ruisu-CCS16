function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
}

function draw() {
  noStroke();
  fill(255,237,106);
  rect(width/4,height/2,width/2,height);
  fill(169,174,112);
  rect(width/4,height/2, 10, 10);
  
  fill(169,174,112);
  rect((width*3)/4, height/2,width/2, height);
  fill(255,237,106);
  rect(width*3/4, height/2, 10,10);
}
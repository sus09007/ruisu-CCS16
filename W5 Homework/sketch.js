function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  chee = color(255,255,255);
  
}

function draw() {
    cheetah();
}

function mousePressed(){
  chee = color (random(255),random(255),random(255));
  
}

function cheetah() {
  noStroke();
  fill(chee);
  triangle(100,50,100,80,130,80);
  triangle(250,50,250,80,220,80);
  quad(100,80,100,140,250,140,250,80);
  quad(100,140,150,200,200,200,250,140);
  fill(100);
  triangle(130,110,155,110,145,120);
  triangle(190,110,220,110,200,120);
  stroke(100);
  line(155,130,160,165);
  line(195,130,190,165);
  triangle(170,165,180,165,175,170);
  }
function setup() {
  createCanvas(windowWidth, windowHeight);
  framRate(1)
}

function draw() {
  backgound(255);
  noStroke()；
  
  var col1 = color( random(255), random(255), random(255));
  var col2 = color( random(255), random(255), random(255));
  fill(
    red(col1)+col2), green(col1 + col2), blue(col1+ col2));
    
}
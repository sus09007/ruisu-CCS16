//Moody
var col = {};
var circlePositions = [];
function setup() {
  createCanvas(500,500);
  col.r = random(150,255);
  col.g = 0;
  col.b = random(100,200);
 

}

function draw() {
  background(col.r,250,col.b);
  noStroke()
  fill(250,200,0, 100);
  for (var i = 0; i< circlePositions.length; i++){ 
    
    ellipse(circlePositions[i].x, circlePositions[i].y, 25, 25);
    
  };
  
}
  function mousePressed(){

col.r = random(150,255);
col.g = 0;
col.b = random(100,200);

}
 function mouseDragged (){
  circlePositions.push(createVector(mouseX,mouseY)); 
 };
function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}


function draw (){
  if (mouseX > width/ 2){
    ellipse(mouseX, mouseY, 100,100);
  }
  else{
    rect(mouseX, mouseY, 200,200)
  }
  }
 
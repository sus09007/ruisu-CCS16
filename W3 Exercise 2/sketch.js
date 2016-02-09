function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  
}

function draw() {
  var x=0;
  var y=0;
  background (170,100,133);
  for(var x=0; x<50; x++){
    for (var y=0; y<50; y++){
      
      rect(x*60, y*60, 30,30);
      ellipse(x*60+30,y*60+30, 30,30 )
      fill(200,144,180);
    }
  }
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  colorMode(HSB,360,100,100);
  frameRate(2)
}

function draw(){
  var myHue = random(360);
  for(var i=0; i<4; i++){
   // fill(i*20,100,100); //multiplier for i is small, then get analogous color
    fill(myHue + (i*20), 100,100); //myHue is incrementing because i increases
    rect(i* 100+100, height/2, 50,50);
    
  }
    
}
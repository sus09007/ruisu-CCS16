var xspeed = 5.0;
var x = 0.0;
 var angle = 0.0;
function setup(){
  createCanvas(400,400);
frameRate(8);
}
function draw(){
  background("pink"); 
  noStroke()
   translate(0,height/2);
    var amplitude = height/5; 
    var y;    
    if (x === 0){
      angle = 0;
    }
    else {
      angle +=10.0;
    }
y = sin(radians(angle)) * amplitude;
    fill(210,90,177);
    ellipse(x,y,10,10);
    x+=5.0;
    x %= width;
    
     translate(0,height/4);
    var amplitude = height/5; 
    var y;    
    if (x === 0){
      angle = 0;
    }
    else {
      angle +=10.0;
    }
y = sin(radians(angle)) * amplitude;
    fill(210,90,177);
    ellipse(x,y,10,10);
    x+=5.0;
    x %= width;
    
     translate(0,height/3);
    var amplitude = height/5; 
    var y;    
    if (x === 0){
      angle = 0;
    }
    else {
      angle +=10.0;
    }
y = sin(radians(angle)) * amplitude;
    fill(210,90,177);
    ellipse(x,y,10,10);
    x+=5.0;
    x %= width;
}
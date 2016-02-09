var numRect =20;

var scalar= 1.0;

function setup (){
  createCanvas (500,500);
  
}

function draw(){
  background (255);
  scale(scalar);


for(var i=1; i<= numRect; i++){
  noFill();
  fill(random(255),random(255),random(255));
  rect(i,i,width/i,width/i);
}

scalar-=0.001;

}
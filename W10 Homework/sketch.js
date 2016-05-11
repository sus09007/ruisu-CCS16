var words=["happy","sad","upset","pissed","mad","pumped","motivated","bored","blah","interested","loved"]
var index=0

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50)
  textAlign(CENTER)
  text("Now I am", width/2, height/2);
  colorMode(RGB, 100);
}

function draw(){
  // if I were part
  textSize(50)
  fill('white')
  text('I....',windowWidth/2,windowHeight/4)

}
function mousePressed() {

  background('black')
  fill(mouseY%255, 90,mouseY%100);
  textSize(150);
  text(words[index], windowWidth/2, windowHeight/2);  
  index=index+1

  if(index ==words.length){
    index=0;
  }
}

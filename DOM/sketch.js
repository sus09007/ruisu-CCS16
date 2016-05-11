var y = 100;
var slider;
//var blink;
var img

function setup(){
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 255, 10);
  slider.position(10, 100);
  slider.style ('width', '80px');
  blink= random(0,200);
}

function draw() {

  var val = slider.value();
  background(222,val,200);
}

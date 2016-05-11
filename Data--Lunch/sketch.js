var data = [
  12.44,
  10,
  8.75,
  5.75,
  11,
  ];

function setup() {
  text("Amount of money spent on lunch");
  createCanvas(600,600);
  translate(0,width/2);
  for(var i =0; i < data.length; i++){
    translate(90,0);
    //we map our data range
    var mappedDataElement = map(data[i], 1.5,6,10,45);
    //use the mapped value as our width&height
    ellipse(0,0,mappedDataElement, mappedDataElement);
  }
}

var mySecondArray = [];
function setup() {
  createCanvas(500,500);
  
  for(var i =0; i<5; i ++){
    mySecondArray.push(random(12));
  }
  print(mySecondArray);
}

function draw() {
  background(0,255,0);
  for(var i = 0; i < mySecondArray.length; i++){
    fill(255,0,0,100);
    rect(width/2, height/2, mySecondArray[i]*10,mySecondArray[i]*10);
  }
}
//always think if we are writing or reading to the array.

//function mousePressed(){
//  mySecondArray.push(random(22));
//    print(mySecondArray.length);
//}      //will record elements in array (adding into array)

function mousePressed(){
  var tempArray = mySecondArray.slice(0,2);
  mySecondArray = tempArray;
  print(mySecondArray);
}  //takes pieces out of array....
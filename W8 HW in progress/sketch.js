


function setup(){
  createCanvas(400,400);
  text(lines, 0,0,width, height);
}
 
  
var lines = [];
function preload(){
    lines = loadString("https://en.wikisource.org/wiki/Alcohol,_a_Dangerous_and_Unnecessary_Medicine")
}
  
var linesAsString = lines.join(' ');
  
  //in order to split by sentence,
  //we need to have our lines as a single long string
  var sentences = RiTa.splitSentences(linesAsString);
  
  text('there are ' + sentences.length + ' sentences in this book', 0,10);
  //loop through each of the sentences
  //and do something with each of the sentences
  for(var i=0; i < sentences.length;i++){
    //your code here
  }
  
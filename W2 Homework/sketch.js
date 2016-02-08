function setup() {
  createCanvas(400,600)
  // 300   800
}

function draw() {
  noStroke()
  background(194,188,172)
   fill(64,47,67)  //top chunk
  quad(150,5,95,120,190,140,240,25)
 
 var x1= 90
 var y1= 400
 
 fill(191,156,0)
 quad(x1+120, 350, x1+125,y1+65, x1+175,y1+65,x1+200,355)
 
 fill(6,45,129) //blue bar
 quad (x1-10,y1+30,x1-15,y1+40,x1+280, y1+50,x1+285,y1+40)
 
 fill("black")//black sq
 rect(x1,y1,100,100)
 
 fill("black")
 quad(145,530, 150,550,235,520, 230,505)
 
 var x2=x1+130
 var y2=y1+130
 fill("red")
 rect(x2,y2, 40,15)
 rect(x2+25,y2+20,70,5)
 fill("green")
 ellipse(x2+40,y2+40,15,15)
}
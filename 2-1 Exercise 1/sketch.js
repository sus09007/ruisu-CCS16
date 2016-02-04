var pty=200
var ptx=200

function setup() {
  createCanvas(400,400);
background(240);
strokeWeight(10);
}

function draw() {
strokeCap(SQUARE);
stroke('black')
rect(0,0,ptx,pty);
rect(0,pty,ptx,pty);
rect(ptx,0,ptx,pty);
rect(ptx,pty,ptx,pty);
line(0,40,160,pty);
line(0,80,120,pty);
line(0,120,80,pty);
line(0,160,40,pty);
line(0,0,200,pty);
line(40,0,ptx,160);
line(80,0,ptx,120);
line(120,0,ptx,80);
line(160,0,ptx,40);
stroke('blue')
line(40,205,40,395);
line(80,205,80,395);
line(120,205,120,395);
line(160,205,160,395);
stroke('yellow')
line(205,240,395,240);
line(205,280,395,280);
line(205,320,395,320);
line(205,360,395,360);
stroke('black')
line(400,0,ptx,pty);
line(360,0,ptx,160);
line(320,0,ptx,120);
line(280,0,ptx,80);
line(240,0,ptx,40);
line(400,40,240,pty);
line(400,80,280,pty);
line(400,120,320,pty);
line(400,160,360,pty);



}

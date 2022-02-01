let wall;
let floor;
let bed;
let working;

function preload() {
  wall = loadImage("whitewall.jpg");
  floor = loadImage("woodfloor.jpg");
  bed = loadImage('bed.png');
  working = loadImage("working.gif");
  
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(217, 255, 251);
  
  orbitControl();
  noStroke();
  
//floor
  push();
  translate(-30, 90, 300);
  texture(floor);
  rotateX(-1.6);
  plane(600,400);
  pop();

  //wall1
  push();
  translate(-30, -100, 100);
  texture(wall);
  plane(600,400);
  pop();
  
//wall2
  push();
  translate(265, -100, 300);
  texture(wall);
  rotateY(-1.58);
  plane(400);
  pop();

  //wall3
  push();
  translate(-330, -100, 300);
  texture(wall);
  rotateY(-1.58);
  plane(400);
  pop();
  
    //bed
  push();
  translate(-150, 5,300);
  texture(bed);
  //rotateY(-1.08);
  plane(300);
  pop();
  
    //working
  push();
  translate(120,0,200);
  texture(working);
  plane(280);
  pop();
}

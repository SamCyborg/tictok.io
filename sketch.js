 var hr,mn,sc;
 var scAngle, mnAngle,hrAngle;

function setup() {
  createCanvas(600,600);
   angleMode(DEGREES);
   colorMode(HSB);
}

function draw() {
  background(0); 

  translate(300,300);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();
 
  //The map() function converts one range (0-60 seconds in a minute) 
  // to another range (0-360 degrees in a circle).
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  //blue
  stroke(180,100,100);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  //purple
  stroke(267,96,78);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  //green
  stroke(99,123,123);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  push();
  //blue
  stroke(180,100,100);
  strokeWeight(8);
  noFill();
  arc(0,0,300,300,0,scAngle);
  pop();

  push();
  //purple
  stroke(267,96,78);
  strokeWeight(8);
  noFill();
  arc(0,0,280,280,0,mnAngle);
  pop();

  push();
  //green
  stroke(99,123,123);
  strokeWeight(8);
  noFill();
  arc(0,0,260,260,0,hrAngle);
  pop();

  drawSprites();
}
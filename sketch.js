function setup() {

  createCanvas(800, 800);
}

function draw() {

  background(245, 243, 238);


  noStroke();


  fill(225, 40, 20);
  rect(0, 0, 370, 315);


  fill(245, 210, 15);
  rect(0, 530, 75, 270);

 
  fill(30, 40, 145);
  rect(370, 530, 245, 245);

 
  stroke(20, 20, 20);
  strokeWeight(12);
  noFill();

  let movimento = sin(frameCount * 0.12) * 20;
  
  line(75, 530, 75, 800);   
  line(370, 0, 370, 800);   
  line(615, 530, 615, 800); 

  line(0, 530, 370, 530);
  line(0, 315, 800, 315);
  line(0, 530, 800, 530);
  line(370, 775, 615, 775); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

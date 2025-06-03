function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(220);

  translate(width / 2 , height ); // center-bottom of canvas

  branch(100);
}

function branch(len) {
  //len= length of branch
  strokeWeight(map(len, 10,100,1,15));//map strokeweight for natural effect
  
 push(); //avoid affecting next branch 
  if (len > 10) {
    line(0, 0, 0, -len); // -len for right direction
    translate(0, -len); //transalte to end of branch for rep
    rotate(random(20,30)); //rotation for natural look
    branch(len * random(0.7,0.9));
    rotate(random(-50,-60)); //second branch
    branch(len * random( 0.7, 0.9));
  }
  pop();
  
      }
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myCanvas', 'jpg');
  }
}

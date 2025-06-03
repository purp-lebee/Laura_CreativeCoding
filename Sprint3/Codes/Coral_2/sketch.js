function setup() {
  createCanvas(600, 800);
  angleMode(DEGREES);
  noLoop();
  background(0);

  let numBranches = 30;       // number of base branches in the fan
  let fanAngle = 90;          // total angle of the fan in degrees
  let startAngle = -fanAngle / 2;

  // Draw first coral (top)
  push();
  translate(width / 2, height / 2.5);  // upper third of canvas
  for (let i = 0; i < numBranches; i++) {
    push();
    let angle = startAngle + (fanAngle / (numBranches - 1)) * i;
    rotate(angle);
    branch(40);
    pop();
  }
  pop();

  // Draw second coral (bottom)
  push();
  translate(width / 2, (height / 2.5) * 2);  // lower third of canvas
  for (let i = 0; i < numBranches; i++) {
    push();
    let angle = startAngle + (fanAngle / (numBranches - 1)) * i;
    rotate(angle);
    branch(40);
    pop();
  }
  pop();
}

function branch(len, depth = 0) {
  let c = lerpColor(color('#DA00FF'), color('#00B0FF'), depth / 10);
  stroke(c);
  strokeWeight(map(len, 10, 80, 1, 10));

  if (len > 8) {
    line(0, 0, 0, -len);
    translate(0, -len);

    push();
    rotate(random(15, 30));
    branch(len * random(0.7, 0.9), depth + 1);
    pop();

    push();
    rotate(random(-15, -20));
    branch(len * random(0.7, 0.9), depth + 1);
    pop();
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('pattern', 'jpg');
  }
}


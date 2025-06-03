function setup() {
  createCanvas(600, 800);
  angleMode(DEGREES);
  noLoop();
  background(0);

  let numBranches = 40;         // number of base branches
  let fanAngle = 180;           // half-circle fan
  let startAngle = -fanAngle / 2;

  translate(width / 2, height / 2);

  for (let i = 0; i < numBranches; i++) {
    push();
    let angle = startAngle + (fanAngle / (numBranches - 1)) * i;
    rotate(angle);

    // vary the initial length between 30 and 60 for more organic effect
    let len = random(30, 60);

    // use a different branch function variant
    branchVariant(len);
    pop();
  }
}

function branchVariant(len, depth = 0) {
  // subtle color shift from orange to pink
  let c = lerpColor(color('#10EA19'), color('#0027FF'), depth / 12);
  stroke(c);
  strokeWeight(map(len, 10, 80, 1, 8));

  if (len > 6) {
    line(0, 0, 0, -len);
    translate(0, -len);

    push();
    // wider branching angles and random lengths for variation
    rotate(random(20, 40));
    branchVariant(len * random(0.6, 0.85), depth + 1);
    pop();

    push();
    rotate(random(-40, -25));
    branchVariant(len * random(0.6, 0.85), depth + 1);
    pop();

    // Optional: add a smaller middle branch occasionally
    if (random() < 0.4) {
      push();
      rotate(random(-10, 10));
      branchVariant(len * random(0.5, 0.7), depth + 1);
      pop();
    }
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('pattern', 'jpg');
  }
}

  
  function keyPressed() {
    if (key === 's' || key === 'S') {
      saveCanvas('myCanvas', 'jpg');
    }
  }
  
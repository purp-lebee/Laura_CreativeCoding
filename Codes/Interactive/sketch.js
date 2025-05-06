let ellipses = [];
let gradientRadius;
let expanding = false;
let shrinking = false;

function setup() {
  createCanvas(600, 600);
  stroke(1);
  ellipseMode(CENTER);
  rectMode(CENTER);

  gradientRadius = width / 10;

  let cols = 20;
  let rows = 20;
  let cellW = width / cols;
  let cellH = height / rows;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let centerX = x * cellW + cellW / 2;
      let centerY = y * cellH + cellH / 2;

      for (let i = 0; i < 3; i++) {
        let e = createRandomEllipse(centerX, centerY, cellW, cellH);
        ellipses.push(e);
      }
    }
  }
}

function draw() {
  background(255);

  // Expand or shrink the radius based on interaction
  if (expanding && gradientRadius < width) {
    gradientRadius += 5;
  } else if (shrinking && gradientRadius > width / 10) {
    gradientRadius -= 5;
  }

  for (let e of ellipses) {
    let d = dist(mouseX, mouseY, e.x, e.y);
    let amt = map(d, 0, gradientRadius, 0, 1);
    amt = constrain(amt, 0, 1);

    // Color blending (blue gradient)
    let r = lerp(0, 0, amt);
    let g = 190;
    let b = lerp(0, 155, amt);

    fill(r, g, b);

    // Scale based on distance
    let sizeFactor = lerp(2, 1, amt);
    ellipse(e.x, e.y, e.w * sizeFactor, e.h * sizeFactor);
  }
}

function mousePressed() {
  expanding = true;
  shrinking = false;
}

function mouseReleased() {
  expanding = false;
  shrinking = true;
}

function createRandomEllipse(centerX, centerY, w, h) {
  let rw = random(10, w * 0.9);
  let rh = random(10, h * 2.5);

  let minX = centerX - w / 2 + rw / 2;
  let maxX = centerX + w / 2 - rw / 2;
  let minY = centerY - h / 2 + rh / 2;
  let maxY = centerY + h / 2 - rh / 2;

  let rx = random(minX, maxX);
  let ry = random(minY, maxY);

  return { x: rx, y: ry, w: rw, h: rh };
}

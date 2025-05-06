let palette = [];

function setup() {
  createCanvas(600, 600);
  background(255);
  rectMode(CENTER);
  noLoop();

  // Define your 3 colors (you can change these!)
  palette = [
    color(255, 0, 0, 100),    // red
    color(0, 150, 255, 100),  // blue
    color(0, 200, 100, 100)   // green
  ];
}

function draw() {
  noStroke();

  let cols = 5;
  let rows = 5;
  let cellW = width / cols;
  let cellH = height / rows;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let centerX = x * cellW + cellW / 2;
      let centerY = y * cellH + cellH / 2;

      for (let i = 0; i < 7; i++) {
        randomEllipse(centerX, centerY, cellW, cellH);
      }
    }
  }
}

function randomEllipse(centerX, centerY, w, h) {
  let rw = random(5, w * 0.8);
  let rh = random(5, h * 0.8);

  let minX = centerX - w / 2 + rw / 2;
  let maxX = centerX + w / 2 - rw / 2;
  let minY = centerY - h / 2 + rh / 2;
  let maxY = centerY + h / 2 - rh / 2;

  let rx = random(minX, maxX);
  let ry = random(minY, maxY);

  // Pick a random color from the palette
  let col = random(palette);
  fill(col);

  ellipse(rx, ry, rw, rh);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myCanvas', 'jpg');
  }
}

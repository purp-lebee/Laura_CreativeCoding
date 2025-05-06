function setup() {
  createCanvas(600, 600);
  background(255);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  stroke(1);
  noFill();

  //grid
  let cols = 6;
  let rows = 6;
  let cellW = width / cols;
  let cellH = height / rows;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let centerX = x * cellW + cellW / 2;
      let centerY = y * cellH + cellH / 2;

      // Draw cell boundary (looks better without)
      //rect(centerX, centerY, cellW, cellH);

      // Draw random Ellipse inside this cell
      for (let i = 0; i < 7; i++) {
        randomEllipse(centerX, centerY, cellW, cellH);
      }
    }
  }
}

//random rect function
function randomEllipse(centerX, centerY, w, h) {
  let rw = random(10, w * 1);
  let rh = random(10, h * 3);

  let minX = centerX - w / 2 + rw / 2;
  let maxX = centerX + w / 2 - rw / 2;
  let minY = centerY - h / 2 + rh / 2;
  let maxY = centerY + h / 2 - rh / 2;

  let rx = random(minX, maxX);
  let ry = random(minY, maxY);

  ellipse(rx, ry, rw, rh);
  
}
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myCanvas', 'jpg');
  }


}

function setup() {
    createCanvas(600, 600, P2D); // Use P2D renderer for better alpha handling
    background(255);
    rectMode(CENTER);
    noLoop();
  }
  
  function draw() {
    noStroke();
  
    // Grid settings
    let cols = 20;
    let rows = 20;
    let cellW = width / cols;
    let cellH = height / rows;
  
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let centerX = x * cellW + cellW / 2;
        let centerY = y * cellH + cellH / 2;
  
        // Draw random ellipses inside this cell
        for (let i = 0; i < 7; i++) {
          randomEllipse(centerX, centerY, cellW, cellH);
        }
      }
    }
  }
  
  // Draw a red ellipse with transparency within a cell
  function randomEllipse(centerX, centerY, w, h) {
    let rw = random(5, w * 0.8);  // Width of ellipse
    let rh = random(5, h * 0.8);  // Height of ellipse
  
    let minX = centerX - w / 2 + rw / 2;
    let maxX = centerX + w / 2 - rw / 2;
    let minY = centerY - h / 2 + rh / 2;
    let maxY = centerY + h / 2 - rh / 2;
  
    let rx = random(minX, maxX);
    let ry = random(minY, maxY);
  
    fill(255, 0, 0, 100); // Red with moderate transparency
    ellipse(rx, ry, rw, rh);
  }
  
  function keyPressed() {
    if (key === 's' || key === 'S') {
      saveCanvas('myCanvas', 'jpg');
    }
  }
  
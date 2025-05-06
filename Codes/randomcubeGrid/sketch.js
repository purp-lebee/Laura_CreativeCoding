function setup() {
    createCanvas(600, 600, WEBGL);
    background(0);
    rectMode(CENTER);
    noLoop();
  }
  
  function draw() {
    stroke(255);
    noFill();
    
  
    let cols = 5;
    let rows = 5;
    let cellW = width / cols;
    let cellH = height / rows;
  
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let centerX = x * cellW + cellW / 2;
        let centerY = y * cellH + cellH / 2;
  
        for (let i = 0; i < 5; i++) {
          randomCube(centerX, centerY, cellW, cellH);
        }
      }
    }
  }
  
  function randomCube(centerX, centerY, w, h) {
    let rw = random(10, w * 0.9);
    let rh = random(10, h * 0.9);
    let rd = random(10, 100); // depth of the cube
  
    let minX = centerX - w / 2 + rw / 2;
    let maxX = centerX + w / 2 - rw / 2;
    let minY = centerY - h / 2 + rh / 2;
    let maxY = centerY + h / 2 - rh / 2;
  
    let bx = random(minX, maxX);
    let by = random(minY, maxY);
  
    // Translate to proper position in WEBGL (origin is center of canvas)
    push();
    translate(bx - width / 2, by - height / 2, 0);
    box(rw, rh, rd);
    pop(); 
  }
  
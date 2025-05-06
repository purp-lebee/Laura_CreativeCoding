function setup() {
    createCanvas(400, 400, WEBGL);
    angleMode(DEGREES);
    rectMode(CENTER);
  }
  
  function draw() {
    background(0);
  
    let cols = 10;
    let rows = 10;
    let cellW = width / cols;
    let cellH = height / rows;
  
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let centerX = x * cellW + cellW / 2;
        let centerY = y * cellH + cellH / 2;
      }
  
      noFill();
      stroke(255);
      rotateX(frameCount * 0.3);
      rotateY(frameCount * 0.3);
      box(100);
      box(150);
      box(200);
     
    }
  }
  
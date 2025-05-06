function setup() {
    createCanvas(600, 600);
    background(255);
    rectMode(CENTER);
    noLoop();
  }
  
  function draw() {
    stroke(1);
    noFill();
    
    // big center rectangle
    let bigX = width / 2;
    let bigY = height / 2;
    let bigW = 500;
    let bigH = 500;
    rect(bigX, bigY, bigW, bigH);
    
    for (let i = 0; i < 10; i++) {
      randomRect(bigX, bigY, bigW, bigH);
    }
  }
  
  function randomRect(centerX, centerY, w, h) {
    let rw = random(30, 200);
    let rh = random(30, 200);
  
    // Boundaries for center of small rect so it stays inside the big one
    let minX = centerX - (w / 2) + (rw / 2);
    let maxX = centerX + (w / 2) - (rw / 2);
    let minY = centerY - (h / 2) + (rh / 2);
    let maxY = centerY + (h / 2) - (rh / 2);
  
    let rx = random(minX, maxX);
    let ry = random(minY, maxY);
  
    rect(rx, ry, rw, rh);
  }
  function keyPressed() {
    if (key === 's' || key === 'S') {
      saveCanvas('myCanvas', 'jpg');
    }
  
  }
  
function setup() {
    createCanvas(600, 600, WEBGL);
    rectMode(CENTER);
  }
  
  function draw() {
    background(0); // Clear canvas each frame
    stroke(255);
    noFill();
  
    let cols = 6;
    let rows = 6;
    let cellW = width / cols;
    let cellH = height / rows;
  
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let centerX = x * cellW + cellW / 2;
        let centerY = y * cellH + cellH / 2;
        
        //cube1
        let boxW1 = cellW * 0.7;
        let boxH1 = cellH * 0.7;
        let boxD1 = 70;
  
        push();
        translate(centerX - width / 2, centerY - height / 2, 0);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        box(boxW1, boxH1, boxD1);
        pop();
  
        //cube2
        let boxW2 = cellW * 0.5;
        let boxH2 = cellH * 0.5;
        let boxD2 = 50;
  
        push();
        translate(centerX - width / 2, centerY - height / 2, 0);
        rotateX(frameCount * 0.02);
        rotateY(frameCount * 0.02);
        box(boxW2, boxH2, boxD2);
        pop();
  
        //cube3
        let boxW3 = cellW * 0.3;
        let boxH3 = cellH * 0.3;
        let boxD3 = 30;
  
        push();
        translate(centerX - width / 2, centerY - height / 2, 0);
        rotateX(frameCount * 0.03);
        rotateY(frameCount * 0.03);
        box(boxW3, boxH3, boxD3);
        pop();
  
        //cube4
        let boxW4 = cellW * 0.1;
        let boxH4 = cellH * 0.1;
        let boxD4 = 10;
  
        push();
        translate(centerX - width / 2, centerY - height / 2, 0);
        rotateX(frameCount * 0.04);
        rotateY(frameCount * 0.04);
        box(boxW4, boxH4, boxD4);
        pop();
      }
    }
  }
  
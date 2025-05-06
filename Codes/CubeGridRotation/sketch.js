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
      
    
      //cube1
      let boxW1 = cellW * 0.6;
      let boxH1 = cellH * 0.6;
      let boxD1 = 60;
   
  
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let centerX = x * cellW + cellW / 2;
          let centerY = y * cellH + cellH / 2;
  
          push();
          translate(centerX - width / 2, centerY - height / 2, 0);
          rotateX(frameCount * 0.01); 
          rotateY(frameCount * 0.01);
          box(boxW1, boxH1, boxD1);
          pop();
          
         
        
      }
    }
  }
  
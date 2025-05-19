let angle = 0;
let clicks = 0;
let maxClicks = 20;
let clickPositions = [];

let s = function(sketch) {
  sketch.setup = function() {
    let h = document.body.clientHeight;
    let c = sketch.createCanvas(sketch.windowWidth, h);
    sketch.pixelDensity(1);

    // Put canvas in front
    c.position(0, 0);
    c.style('pointer-events', 'none'); // Allows clicks through canvas
    c.style('z-index', '9999');        // High z-index for top layer
    c.style('position', 'fixed');      // Fix to viewport so it stays on scroll

    sketch.clear(); // Transparent background
  };

  sketch.draw = function() {
    sketch.clear(); // Keeps transparency, no background fill

    let maxScale = Math.max(sketch.width, sketch.height) * 1.5;
    let scaleFactor = sketch.map(clicks, 0, maxClicks, 50, maxScale);

    for (let i = 0; i < clickPositions.length; i++) {
      let pos = clickPositions[i];
      let scale = scaleFactor; // All circles grow together
      sketch.fill(255, 100, 200, 150);
      sketch.noStroke();
      sketch.ellipse(pos.x, pos.y, scale, scale);
    }
  };

  sketch.mousePressed = function() {
    clicks = Math.min(clicks + 1, maxClicks);
    clickPositions.push({ x: sketch.mouseX, y: sketch.mouseY });
  };

  sketch.windowResized = function() {
    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
  };
};

new p5(s);

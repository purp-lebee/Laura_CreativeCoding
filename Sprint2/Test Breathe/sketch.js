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
    sketch.noStroke();
  };

  sketch.draw = function() {
    sketch.clear(); // Keeps transparency, no background fill

    // determine the size
    let scale = sketch.sin(angle) * 80 + 100; // oscillates between 20 and 180

    sketch.fill(100, 200, 255);
    sketch.ellipse(sketch.width / 2, sketch.height / 2, scale, scale); // draw the ellipse

    angle += 0.01; // speed
  };
};

// Attach to p5 instance
new p5(s);

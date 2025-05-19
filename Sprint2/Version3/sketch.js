let s = function (sketch) {
  let images = [];
  let currentImageIndex = 0;

  let shape = {
    x: 100,
    y: 100,
    size: 50,
    visible: true,
  };

  let respawnCount = 0;
  const maxRespawns = 5;
  const gridSize = 40;

  sketch.preload = function () {
    for (let i = 1; i <= 5; i++) {
      images.push(sketch.loadImage(`Error${i}.png`));
    }
  };

  sketch.setup = function () {
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

  sketch.draw = function () {
    sketch.background(255);

    // Draw purple grid only if shape is still active
    if (respawnCount < maxRespawns) {
      sketch.stroke(128, 0, 128);
      sketch.strokeWeight(1);
      for (let x = 0; x <= sketch.width; x += gridSize) {
        sketch.line(x, 0, x, sketch.height);
      }
      for (let y = 0; y <= sketch.height; y += gridSize) {
        sketch.line(0, y, sketch.width, y);
      }
    }

    if (shape.visible && respawnCount < maxRespawns) {
      sketch.noStroke();
      let img = images[currentImageIndex];

      // Scale image to fit in 50x50 box keeping aspect ratio
      let scaleFactor = Math.min((shape.size / img.width) * 5, (shape.size / img.height) * 5);
      let imgWidth = img.width * scaleFactor;
      let imgHeight = img.height * scaleFactor;

      // Draw image centered inside shape area
      sketch.image(
        img,
        shape.x + (shape.size - imgWidth) / 2,
        shape.y + (shape.size - imgHeight) / 2,
        imgWidth,
        imgHeight
      );
    }
  };

  sketch.mousePressed = function () {
    if (
      shape.visible &&
      respawnCount < maxRespawns &&
      sketch.mouseX >= shape.x &&
      sketch.mouseX <= shape.x + shape.size &&
      sketch.mouseY >= shape.y &&
      sketch.mouseY <= shape.y + shape.size
    ) {
      shape.visible = false;
      respawnCount++;

      if (respawnCount < maxRespawns) {
        setTimeout(() => {
          shape.x = sketch.random(sketch.width - shape.size);
          shape.y = sketch.random(sketch.height - shape.size);

          currentImageIndex = (currentImageIndex + 1) % images.length;
          shape.visible = true;
        }, 500);
      }
    }
  };
};

new p5(s);

let mySketch = function (p) {
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

  p.preload = function () {
    for (let i = 1; i <= 5; i++) {
      let imgPath = browser.runtime.getURL(`images/Error${i}.png`);
      images.push(p.loadImage(imgPath));
    }
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function () {
    p.background(255);

    if (respawnCount < maxRespawns) {
      p.stroke(128, 0, 128);
      p.strokeWeight(1);
      for (let x = 0; x <= p.width; x += gridSize) {
        p.line(x, 0, x, p.height);
      }
      for (let y = 0; y <= p.height; y += gridSize) {
        p.line(0, y, p.width, y);
      }
    }

    if (shape.visible && respawnCount < maxRespawns) {
      p.noStroke();
      let img = images[currentImageIndex];

      let scaleFactor = Math.min((shape.size / img.width) * 5, (shape.size / img.height) * 5);
      let imgWidth = img.width * scaleFactor;
      let imgHeight = img.height * scaleFactor;

      p.image(
        img,
        shape.x + (shape.size - imgWidth) / 2,
        shape.y + (shape.size - imgHeight) / 2,
        imgWidth,
        imgHeight
      );
    }
  };

  p.mousePressed = function () {
    if (
      shape.visible &&
      respawnCount < maxRespawns &&
      p.mouseX >= shape.x &&
      p.mouseX <= shape.x + shape.size &&
      p.mouseY >= shape.y &&
      p.mouseY <= shape.y + shape.size
    ) {
      shape.visible = false;
      respawnCount++;

      if (respawnCount < maxRespawns) {
        setTimeout(() => {
          shape.x = p.random(p.width - shape.size);
          shape.y = p.random(p.height - shape.size);

          currentImageIndex = (currentImageIndex + 1) % images.length;
          shape.visible = true;
        }, 500);
      }
    }
  };
};

new p5(mySketch);

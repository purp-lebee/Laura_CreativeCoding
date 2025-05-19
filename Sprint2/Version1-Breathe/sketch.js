let angle = 0;
let clicks = 0;
let maxClicks = 10; // After 20 clicks, it will be fully opaque
let clickPositions = [];

let s = function(sketch) {
    sketch.setup = function() {
        let h = document.body.clientHeight;
        let c = sketch.createCanvas(sketch.windowWidth, h);
        sketch.pixelDensity(1);
        c.position(0, 0);
        sketch.background(255);
    };

    sketch.draw = function() {
        let opacity = sketch.map(clicks, 0, maxClicks, 0, 255);
        sketch.background(100, 200, 255, opacity); // Fills screen with increasing opacity

        for (let i = 0; i < clickPositions.length; i++) {
            let pos = clickPositions[i];
            let scale = Math.sin(angle + i * 0.5) * 50 + 60;
            sketch.fill(255, 100, 200, 200);
            sketch.noStroke();
            sketch.ellipse(pos.x, pos.y, scale, scale);
        }

        angle += 0.05;
    };

    sketch.mousePressed = function() {
        clicks = Math.min(clicks + 1, maxClicks);
        clickPositions.push({ x: sketch.mouseX, y: sketch.mouseY });
    };
};

new p5(s);

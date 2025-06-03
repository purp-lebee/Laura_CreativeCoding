function setup() {
createCanvas(600, 800);
angleMode(DEGREES);
noLoop();
background(0);
translate(width / 2, height / 2); // center of canvas



let numBranches = 50; // number of base branches around circle
for (let i = 0; i < numBranches; i++) {
push();
rotate((360 / numBranches) * i);
branch(40); // start recursive branch
pop();
}
}

function branch(len, depth = 0) {
let c = lerpColor(color('#DA00FF'), color(' #FF9800'), depth / 10);
stroke(c);
strokeWeight(map(len, 10, 80, 1, 10));

if (len > 8) {
line(0, 0, 0, -len);
translate(0, -len);

push();
rotate(random(15, 30));
branch(len * random(0.7, 0.9), depth + 1);
pop();

push();
rotate(random(-15, -20));
branch(len * random(0.7, 0.9), depth + 1);
pop();
}
}

function keyPressed() {
if (key === 's' || key === 'S') {
saveCanvas('pattern', 'jpg');
}
}

  function keyPressed() {
    if (key === 's' || key === 'S') {
      saveCanvas('myCanvas', 'jpg');
    }
  }
  
let r = 0;
let b = 255;
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseY, 0, 600, 255, 0);
  background(r, 0, b);
  fill(250, 118, 222);
  circle(mouseX, mouseY, 50);
}

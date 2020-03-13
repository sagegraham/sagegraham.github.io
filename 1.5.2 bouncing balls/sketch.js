// Project Title
// Your Name
// Date
// we ignore this right now
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let newBall = {
  x: random(width),
  y: random(height),
  diameter: random(25, 100),
  dx: random(-5, 5),
  dy: random(-5, 5),
};

let balls;
let  c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = 0;
  balls = [];
}

function draw() {
  background(220);
  bounce();
}

function mousePressed() {
  ellipse(newBall.x, newBall.y, newBall.diameter, newBall.diameter);
  c++;
  balls.push(c); // i know im doing this wrong
}

function bounce() {
  if (newBall.x >= width-newBall.diameter || newBall.x <= 0+newBall.diameter) {
    newBall.dx *= -1;
  }
  if (newBall.y >= height-newBall.diameter || newBall.y <= 0+newBall.diameter) {
    newBall.dy *= -1;
  }  

}

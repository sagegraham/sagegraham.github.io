// setInterval demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  window.setInterval(addBall, 1000); //adding one ball every 1000 milliseconds
  //could use setTimeOut to have it only happen once after (at) the specified time
}

function draw() {
  background("white");
  moveBalls();
  displayBalls();
}

function moveBalls() {
  for (let i = 0; i < ballArray.length; i++) {
    let dx = random(-10, 10);
    let dy = random(-10, 10);
    ballArray[i].x += dx;
    ballArray[i].y += dy;
  }
}

function displayBalls() {
  for (let item = 0; item < ballArray.length; item++) {
    fill(ballArray[item].colour);
    circle(ballArray[item].x, ballArray[item].y, ballArray[item].radius);
  }

}

function addBall() {
  // if (mouseIsPressed) { //i put this part in for fun but its unnecessary
    let thisBall = {
      x: random(width),
      y: random(height),
      radius: random(25, 50),
      colour: color(random(255), random(255), random(255), random(255)), 
    };
    ballArray.push(thisBall);
  // }
}
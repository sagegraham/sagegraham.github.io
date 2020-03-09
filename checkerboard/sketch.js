// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let isBlack = true;

function setup() {
  if (windowWidth >= windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  
  fill(255);
}

function draw() {
  background(220);
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (isBlack) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x*width/8,y*height/8,width/8,height/8);
      isBlack = !isBlack;
    }
    isBlack = !isBlack;
  }
}

function windowResized() {
  setup();
}
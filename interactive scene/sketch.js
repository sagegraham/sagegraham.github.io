// Interactive Scene
// Sage Graham
// 02/12/20
// 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//user controlled colour values
let r = 0;
let g = 0;
let b = 0;
let a = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  fill(r, g, b, a);
  let colourBox = rect(50, 50, 100); //box will show current colour

  fill("white"); //creating a canvas for the input
  let easel = rect(windowWidth/3, windowHeight/6, windowWidth/3, windowHeight/2);
}

function keyPressed() {
  //colour adjustment
  if (key === "[" && r <= 250) {
    r+=5;
  }
  else if (key === "]" && r >= 5) {
    r+=5;
    
  }
  if (key === "[" && r <= 250) {
    r+=5;
  }
  if (key === "[" && r <= 250) {
    r+=5;
  }

}


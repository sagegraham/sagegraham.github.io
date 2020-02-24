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
let colourBox;
let easel;

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
  //keys are used to adjust most of the scene's settings: colour, size, and shapes made.

  //r value
  if (key === "[" && r <= 250) { 
    r+=5;
  }
  else if (key === "]" && r >= 5) {
    r-=5;
    
  }
  //g value
  else if (key === ";" && g <= 250) {
    g+=5;
  }
  else if (key === "'" && g >= 5) {
    g-=5;
  }

  //b value
  else if (key === "," && b <=250) {
    b +=5;
  }
  else if (key === "." && b >= 5) {
    b -=5;
  }

  //alpha value
  else if (key === "z" && a<=250) {
    a += 5;
  }
  else if (key === "x" && a >= 5) {
    a -= 5;
  }
   
}


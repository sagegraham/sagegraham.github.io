// Interactive Scene
// Sage Graham
// 02/12/20
// 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let userColour = 0; //user controlled colour

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  fill(userColour);
  let colourBox = rect(50, 50, 100); //box will show current colour

  fill("white"); //creating a canvas for the input
  let easel = rect(windowWidth/3, windowHeight/6, windowWidth/3, windowHeight/2);
}



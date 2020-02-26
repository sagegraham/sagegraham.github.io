// Interactive Scene
// Sage Graham
// 02/12/20
// 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//user controlled values & setup variables
let r;
let g;
let b;
let a;
let shapeColour;
let shapeHeight;
let shapeWidth;
let dVariables = 5; //delta variables is the change factor for r,g,b,a,height,width
let easel;
let event;
let easelPostion;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = 0;
  g = 0;
  b = 0;
  a = 0;
  shapeColour = color(r,g,b,a);
  easelPostion = {
    x: windowWidth/3,
    y: windowHeight/6,
    width: windowWidth/3,
    height: windowHeight/2,
  };
}

function draw() {
  background(220);
  fill("white"); //creating a canvas for the input
  easel = rect(easelPostion.x, easelPostion.y, easelPostion.width, easelPostion.height);
  colourBoxUpdate();
}

function colourBoxUpdate() {
  // console.log("updated");
  shapeColour = color(r,g,b,255);
  console.log(r,g,b,a);
  fill(shapeColour);
  rect(50, 50, 100, 100);

}

function keyPressed() {
  //keys are used to adjust most of the scene's settings: colour, size, and shapes made.
  console.log(key);
  //r value
  if (key === "[" && r <= 255 - dVariables) { 
    r+=dVariables;
  }
  else if (key === "]" && r >= dVariables) {
    r-=dVariables;
    
  }
  //g value
  else if (key === ";" && g <= 255 - dVariables) {
    console.log(g);
    g+=dVariables;
  }
  else if (key === "'" && g >= dVariables) {
    g-=dVariables;
  }

  //b value
  else if (key === "," && b <=255 - dVariables) {
    b +=dVariables;
  }
  else if (key === "." && b >= dVariables) {
    b -=dVariables;
  }

  //alpha value
  else if (key === "z" && a<=255 - dVariables) {
    a += dVariables;
  }
  else if (key === "x" && a >= dVariables) {
    a -= dVariables;
  }

  //shape sizes: height
  else if (key === "=") {
    if (shapeHeight <= 400) {
      shapeHeight += dVariables;
    }
  }
  else if (key === "-") {
    if (shapeHeight >= dVariables) {
      shapeHeight -= dVariables;
    }
  }
  //width
  else if (key === "0") {
    if (shapeWidth <= 400) {
      shapeWidth += dVariables;
    }
  }
  else if (key === "9") {
    if (shapeWidth >= dVariables) {
      shapeWidth -= dVariables;
    }
  }

  //must edit so that this is only active on canvas, but im too lazy rn
  //shape creation: circle
  else if (key === "c") {
    fill(r, g, b, a);
    ellipse(mouseX, mouseY, shapeHeight);
  }

  //oval
  else if (key === "o") {
    fill(r, g, b, a);
    ellipse(mouseX, mouseY, shapeHeight, shapeWidth);
  }

  //square
  else if (key === "s") {
    fill(r, g, b, a);
    rect(mouseX, mouseY, shapeHeight, shapeHeight);
  }  

  //rectangle
  else if (key === "r") {
    fill(r, g, b, a);
    rect(mouseX, mouseY, shapeHeight, shapeWidth);
  } 
  
  //triangle
  else if (key === "t") {
    fill(r, g, b, a);
    ellipse(mouseX - shapeWidth/2, mouseY - shapeHeight/2, mouseX, mouseY, mouseX + shapeWidth/2, mouseY + shapeHeight/2);
  }
}

//inEasel makes it so you can only draw in the easel.
function inEasel() {

}
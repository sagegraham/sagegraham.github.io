// Interactive Scene
// Sage Graham
// 02/12/20
// 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//user controlled values
let r;
let g;
let b;
let a;
let shapeColour;
let shapeHeight = 50;
let shapeWidth;
let penSize; //(strokeWeight) controller,, use mousewheel to change it


let dVariables = 5; //delta variables is the change factor for r,g,b,a,height,width
let easel; //dont think this needs to be a variable
let easelPostion;

//event variables
let event;
let song;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = 0;
  g = 0;
  b = 0;
  a = 255;
  shapeColour = color(r,g,b,a);
  easelPostion = {
    x: windowWidth/3,
    y: windowHeight/6,
    width: windowWidth/3,
    height: windowHeight/2,
  };
  penSize = 5; //stupid move this
  easel = rect(easelPostion.x, easelPostion.y, easelPostion.width, easelPostion.height);
}

function draw() { //mission: refresh everything but easel
  //background(220);
  fill("white");
  stroke(0);
  //needs work, theres a random line man also stroke 0 isnt working?
  rect(0, 0, windowWidth/3, windowHeight); //left of easel
  rect(easelPostion.x, 0, windowWidth*2/3, windowHeight/4); //above easel
  rect(windowWidth*2/3 +1, windowHeight/4, windowWidth/3, windowHeight/2); //right of easel
  rect(easelPostion.x, windowHeight*3/4, windowWidth*2/3, windowHeight/4); //below easel
  colourBoxUpdate();
}

function colourBoxUpdate() {
  shapeColour = color(r,g,b,a);
  fill(shapeColour);
  rect(50, 50, 100, 100);

}

function keyPressed() {
  //keys are used to adjust most of the scene's settings: colour, size, and shapes made.
  //r value
  if (key === "[" && r <= 255 - dVariables) { 
    r+=dVariables;
  }
  else if (key === "]" && r >= dVariables) {
    r-=dVariables;
    
  }
  //g value
  else if (key === ";" && g <= 255 - dVariables) {
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

  //shape sizes: 
  //height
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

  //shape creation: //jesus i just realized i need to make this so these only show on the easel
  //circle
  else if (key === "c") { // && inEasel()) {
    fill(r, g, b, a);
    ellipse(mouseX, mouseY, shapeHeight);
  }

  //oval
  else if (key === "o" && inEasel()) {
    fill(r, g, b, a);
    ellipse(mouseX, mouseY, shapeHeight, shapeWidth);
  }

  //square
  else if (key === "s" && inEasel()) {
    fill(r, g, b, a);
    rect(mouseX, mouseY, shapeHeight, shapeHeight);
  }  

  //rectangle
  else if (key === "r" && inEasel()) {
    fill(r, g, b, a);
    rect(mouseX, mouseY, shapeHeight, shapeWidth);
  } 
  
  //triangle
  else if (key === "t") {// && inEasel()) {
    fill(r, g, b, a);
    triangle(mouseX - shapeWidth/2, mouseY - shapeHeight/2, mouseX, mouseY, mouseX + shapeWidth/2, mouseY + shapeHeight/2);
    console.log("Triangle!");
  }
}

//changes pen stroke size
function mouseWheel(event) {
  penSize += event.delta;
}

//inEasel does exactly what it sounds like.
function inEasel() {
  return (mouseX >= easelPostion.x && mouseY <= easelPostion.y
    && mouseX <= easelPostion.x + easelPostion.width && mouseY >= easelPostion.y + easelPostion.height);

}
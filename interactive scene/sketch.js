// Interactive Scene
// Sage Graham
// 02/12/20
// 
// Extra for Experts:
// The 'easel' in the program refreshes based on window size. A windowRefreshed() function is included (and works!) however is commented out.
// Mouse wheel input is taken for pen size.
//
// Note: I was going to add music but made the executive decision to play Minecraft instead. Music additions/setup is commented out
// on the following lines:  27, 28, 29, 30, 34, 51, 59, 66, 69, 104, 272, 283
 
//user controlled values:
let r;
let g;
let b;
let a;
let shapeColour;
let shapeHeight = 50;
let shapeWidth = 50;
let penSize;

//change factors and objects:
let dVariables = 5;
let dPenSize = 2;
let easel;
let easelPostion;
// let musicButton;
// let mButton;

//event variables
// let event; //drawing and song menu
// let song;

// function preload() {
//   musicButton = loadImage("assets/musicbutton.png");
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = 0;
  g = 0;
  b = 0;
  a = 255;
  easelPostion = {
    x: windowWidth/3,
    y: windowHeight/6,
    width: windowWidth/3,
    height: windowHeight*2/3,
  };
  easel = rect(easelPostion.x, easelPostion.y, easelPostion.width, easelPostion.height);
  // mButton = {
  //   image: musicButton,
  //   x: windowWidth*5/6,
  //   y: windowHeight/12,
  //   width: musicButton.width*3/4,
  //   height: musicButton.height*3/4
  // };
  penSize = 1;
  // event = "drawing";
}

function draw() {
  noStroke();
  refreshOutsideEasel();
  colourBoxUpdate();
  // drawMusicButton();
  displayKey();
  drawLines();
  // displayMusicMenu();
}

//refreshes all the spaces outside of the easel so they do not have 'art' on them;
//similar to having a window in the window (without all the work)
function refreshOutsideEasel() {
  fill(220);
  rect(0, 0, windowWidth/3, windowHeight); //left of easel
  rect(easelPostion.x - 2, 0, windowWidth*2/3, windowHeight/4 - 1); //above easel
  rect(windowWidth*2/3, windowHeight/4 - 2, windowWidth/3 + 1, windowHeight/2 + 1); //right of easel
  rect(easelPostion.x, windowHeight*3/4, windowWidth*2/3, windowHeight/4); //below easel
}

function colourBoxUpdate() {
  noStroke();
  fill(r,g,b,a);
  rect(50, 50, 150, 150);

  fill("black");
  if (g === 255 && r === 0 && b === 0 && a === 255) {
    text("green is not a creative colour!", 50, 250); //heheh easter egg time
  }
  else {
    text("red value: "+r+"; [ and ]", 50, 250);
    text("blue value: "+b+"; , and .", 50, 275);
    text("green value: "+g+"; ; and '", 50, 300);
    text("alpha value (translucency): "+a+"; z and x", 50, 325);

    text("shape height: "+shapeHeight, 50, 375);
    text("shape width: "+shapeWidth, 50, 400);

    text("pen size: "+penSize, 50, 450);
  }
}

// function drawMusicButton() {
//   image(mButton.image, mButton.x, mButton.y, mButton.width, mButton.height);
// }

//shows instructions.
function displayKey() {
  textAlign(LEFT, TOP);
  fill(0);
  text("this is the key for all of the buttons!", easelPostion.x, easelPostion.y + easelPostion.height - 50);

  text("red values:", easelPostion.x + 20, easelPostion.y + easelPostion.height - 30);
  text("[ for more, ] for less.", easelPostion.x + 30, easelPostion.y + easelPostion.height - 15);

  text("green values:", easelPostion.x + 20, easelPostion.y + easelPostion.height);
  text("; for more, ' for less.", easelPostion.x + 30, easelPostion.y + easelPostion.height + 15);

  text("blue values:", easelPostion.x + 20, easelPostion.y + easelPostion.height + 30);
  text(", for more, . for less.", easelPostion.x + 30, easelPostion.y + easelPostion.height + 45);

  text("alpha (translucency) values:", easelPostion.x + 20, easelPostion.y + easelPostion.height + 60);
  text("z for more, x for less.", easelPostion.x + 30, easelPostion.y + easelPostion.height + 75);

  text("shape size:", easelPostion.x + easelPostion.x /2, easelPostion.y + easelPostion.height - 50);
  text("shape height: - is larger (haha its less but more!), = is smaller.", easelPostion.x + easelPostion.x /2 + 30, easelPostion.y + easelPostion.height - 30);
  text("shape width: 9 is larger and 0 is smaller.", easelPostion.x + easelPostion.x /2 + 30, easelPostion.y + easelPostion.height - 15);

  text("shapes!", easelPostion.x + easelPostion.x /2, easelPostion.y + easelPostion.height);
  text("R for rectangle. C for circle. T for triangle. S for square. O for oval.", 
    easelPostion.x + easelPostion.x /2 + 30, easelPostion.y + easelPostion.height + 15);
  text("note: circles and squares are controlled in size by the shape height.",
    easelPostion.x + easelPostion.x /2, easelPostion.y + easelPostion.height + 30);
  text("you're gonna mess up, so remember that the space bar clears the canvas!", 
    easelPostion.x + easelPostion.x /2, easelPostion.y + easelPostion.height + 45);
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   setup();
// }

function keyPressed() {
  noStroke();
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
  else if (key === "-") {
    if (shapeHeight <= 400) {
      shapeHeight += dVariables;
    }
  }
  else if (key === "=") {
    if (shapeHeight >= dVariables) {
      shapeHeight -= dVariables;
    }
  }

  //width
  else if (key === "9") {
    if (shapeWidth <= 400) {
      shapeWidth += dVariables;
    }
  }
  else if (key === "0") {
    if (shapeWidth >= dVariables) {
      shapeWidth -= dVariables;
    }
  }

  //shapes:
  //circle
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
    triangle(mouseX - shapeWidth/2, mouseY + shapeHeight/2, mouseX, mouseY - shapeHeight/2, mouseX + shapeWidth/2, mouseY + shapeHeight/2);
  }

  //clearing easel
  else if (key === " ") {
    clearEasel();
  }
}

//changes pen stroke size
function mouseWheel(event) {
  if (event.deltaY > 0) {
    penSize += dPenSize;
  }
  else if (event.deltaY < 0 && penSize > 1) {
    penSize -= dPenSize;
  }
  
}

//draws...lines...when mouse input is given
function drawLines() {
  stroke(color(r, g, b, a));
  strokeCap(ROUND);
  strokeWeight(penSize);

  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

//'redraws' easel to clear any previous drawings. 
function clearEasel() {
  noStroke();
  fill("white");
  easel = rect(easelPostion.x, easelPostion.y, easelPostion.width, easelPostion.height);
}

//changes event
// function mousePressed() {
//   if (mouseX <= mButton.x && mouseX >= mButton.x + mButton.width &&
//   mouseY >= mButton.y && mouseY <= mButton.y + mButton.height && event === "drawing") {
//     event = "musicMenu";
//   }
//   else if (mouseX <= mButton.x && mouseX >= mButton.x + mButton.width &&
//   mouseY >= mButton.y && mouseY <= mButton.y + mButton.height && event === "musicMenu") {
//     event = "drawing";
//   }
// }

// function displayMusicMenu() {
//   if (event === "musicMenu") {
//    and then the bell rang...
//   }
// }
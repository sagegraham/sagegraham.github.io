// array/state variable project
// sage graham
// due april 8/20
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//to make: stupid simple catching game; 2d; move across screen to catch falling fruits or sth; different difficulties;
//session highscore counter; uhhhhh; include html changes for more marks even though it doesnt matter

let state;
let fruitArray = [];
let fruitLimit = 10;

let screen = {
  width: windowWidth,
  height: windowHeight,
}

let easy = {
  fruit: apples,
  icon: ellipse(0, random(windowWidth, windowHeight), 20, 20),
  gravity: 0.3,
};
let normal = {
  fruit: oranges,
  icon: ellipse(0, random(windowWidth, windowHeight), 20, 20),
  gravity: 0.6,
};
let hard = {
  fruit: peaches,
  icon: ellipse(0, random(windowWidth, windowHeight), 20, 20),
  gravity: 1,
};

let backButton = {
  x: 0,
  y: 0,
  width: screen.width/12,
  height: screen.height/12,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "startMenu";
}

function draw() {
  background(220);
  if (state === "startMenu") {
    startMenu();
  }
  else if (state === "howTo") {
    showInstructions();
  }
  else if (state === "selectDifficulty") {
    selectGameMode();
  }
  else if (state === "game") {
    moveFruit();
    displayFruit();
    checkCollision();
    displayCounters();
  }
  }

function startMenu() {
  fill("red");
  let selectDiff = { 
    X: screen.width/3, 
    y: screen.height/5, 
    width: screen.width/3, 
    height:screen.height/5,
  };
  let instructions = {
    x: screen.width/3, 
    y: screen.height*3/5, 
    width: screen.width/3, 
    height: screen.height/5,
  };
  rect(selectDiff.x, selectDiff.y, selectDiff.width, selectDiff.height);
  rect(instructions.x, instructions.y, instructions.width, instructions.height);
  //add text
  //make it change the colour
  if (mousePressed && mouseX >= selectDiff.x && mouseX <= selectDiff.width && 
  mouseY >= selectDiff.y && mouseY <= selectDiff.height) {
    state = "selectDifficulty";
  }
  if (mousePressed && mouseX >= instructions.x && mouseX <= instructions.width && 
    mouseY >= instructions.y && mouseY <= instructions.height) {
      state = "howTo";
    }
};

function howTo() {
  textAlign(CENTER, CENTER);
  text("fruit will fall from the sky! use the arrow keys to move and catch the fruit in your basket!"
  +" try to catch as many as you can. when "+fruitLimit+" of fruit touch the ground, the game is over.")
  rect(backButton.x, backButton.y, backButton.width, backButton.height);
  if (mousePressed && mouseX >= backButton.x && mouseX <= backButton.width &&
  mouseY >= backButton.y && mouseY <= backButton.height) {
    state = "startMenu";
  };
};

function selectGameMode() {
  
}
// array/state variable project
// sage graham
// due april 20/20
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//to make: stupid simple catching game; 2d; move across screen to catch falling fruits or sth; different difficulties;
//session highscore counter; uhhhhh; include html changes for more marks even though it doesnt matter

let state;
let fruitArray = [];
let fruitLimit = 10;

let selectDiff;
let instructions;

// let screen;

let apple;
let orange;
let peach;
let easyButton;
let normalButton;
let hardButton;

let easy = {
  fruit: apples,
  icon: image(apple, 0, random(windowWidth, windowHeight)),
  gravity: 0.3,
};
let normal = {
  fruit: oranges,
  icon: image(orange, 0, random(windowWidth, windowHeight)),
  gravity: 0.6,
};
let hard = {
  fruit: peaches,
  icon: image(peach, 0, random(windowWidth, windowHeight)),
  gravity: 1,
};

let backButton = {
  x: 0,
  y: 0,
  width: screen.width/12,
  height: screen.height/12,
}

function preload() {
  apple = loadImage("apple.png");
  orange = loadImage("orange.png");
  peach = loadImage("peach.png");

  easyButton = loadImage("easy-icon.png");
  normalButton = loadImage("normal-icon.png");
  hardButton = loadImage("hard-icon.png");

}

function setup() {
  // let screen = {
  //   width: windowWidth,
  //   height: windowHeight,
  // }
  createCanvas(windowWidth, windowHeight);
  state = "startMenu";
}

function draw() {
  if (state === "startMenu") {
    startMenu();
  }
  else if (state === "howTo") {
    console.log("i hate myself");
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
  console.log("maybe its working");
  selectDiff = { 
    x: windowWidth/3, 
    y: windowHeight/5, 
    width: windowWidth/3, 
    height:windowHeight/5,
  };
  instructions = {
    x: windowWidth/3, 
    y: windowHeight*3/5, 
    width: windowWidth/3, 
    height: windowHeight/5,
  };

  fill("red");
  rect(selectDiff.x, selectDiff.y, selectDiff.width, selectDiff.height);
  rect(instructions.x, instructions.y, instructions.width, instructions.height);
  //add text
  //make it change the colour
  if (mouseIsPressed && mouseX >= selectDiff.x && mouseX <= selectDiff.width && 
  mouseY >= selectDiff.y && mouseY <= selectDiff.height) {
    state = "selectDifficulty";
  }
  if ((mouseIsPressed) && mouseX >= instructions.x && mouseX <= instructions.width+instructions.x && 
    mouseY >= instructions.y && mouseY <= instructions.height+instructions.y) {
      state = "howTo";
      console.log("hewwo");
      background(255);
    }
};

function showInstructions() {
  console.log("istg");
  textSize(10);
  fill(50);
  textAlign(CENTER, CENTER);
  text("fruit will fall from the sky! use the arrow keys to move and catch the fruit in your basket! try to catch as many as you can. when "+fruitLimit+" of fruit touch the ground, the game is over.");
  console.log("pls");
  // rect(backButton.x, backButton.y, backButton.width, backButton.height);
  // if (mousePressed && mouseX >= backButton.x && mouseX <= backButton.width &&
  // mouseY >= backButton.y && mouseY <= backButton.height) {
  //   state = "startMenu";
  // };
};

function selectGameMode() {
  background(104, 204, 191);
  // imageMode(CENTER);
  image(easyButton, windowWidth/2, windowHeight*1/6);
  image(normalButton, windowwidth/2, windowHeight*1/3);
  image(hardButton, windowwidth/2, windowHeight*1/2);
}
// array/state variable project
// sage graham
// due april 20/20
// I am so sorry you had to look at this code
// Extra for Experts:
// - was attempted and then given up on
// - it has an arrays (around L173) and state variables (pretty much everywhere)...just...doesn't work

//so many variables
let state;
let fruitArray;
let fruitLimit = 10;

let selectDiff;
let instructions;
let difficulty;
let fruitInt;


let apple;
let orange;
let peach;
let easyButton;
let normalButton;
let hardButton;
let basket;
let catchCounter;
let dropCounter;

let easy = {
  fruit: apple,
  x: 0,
  y: random(0, windowWidth),
  dy: 5,
};
let normal = {
  fruit: orange,
  x: 0,
  y: random(0, windowWidth),
  dy: 10,
};
let hard = {
  fruit: peach,
  x: 0,
  y: random(0, windowWidth),
  dy: 15,
};

let backButton = {
  x: 0,
  y: 0,
  width: windowWidth/6,
  height: windowHeight/6,
};

function preload() {
  apple = loadImage("apple.png");
  orange = loadImage("orange.png");
  peach = loadImage("peach.png");

  easyButton = loadImage("easy-icon.png");
  normalButton = loadImage("normal-icon.png");
  hardButton = loadImage("hard-icon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "startMenu";
  fruitArray = [];  
}

function draw() {
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
    background(104, 204, 191); // this was going to be a cute drawn background but considering i cant see anything its not worth making
    fruitInterval();
    addFruit();
    moveFruit();
    displayFruit();
    userBasket();
    checkCollision();
    displayCounters();
    checkDrops();
  }
  else if (state === "gameover") {
    gameOver();
  }
}

//menus and pre-game stuff
function startMenu() {
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
  fill("blue");
  rect(instructions.x, instructions.y, instructions.width, instructions.height);
  fill("white");
  text("select difficulty", selectDiff.x, selectDiff.y);
  text("how to play", instructions.x, instructions.y);
  //add text
  //make it change the colour
  if (mouseIsPressed && mouseX >= selectDiff.x && mouseX <= selectDiff.width && 
  mouseY >= selectDiff.y && mouseY <= selectDiff.height) {
    state = "selectDifficulty";
  }
  if (mouseIsPressed && mouseX >= instructions.x && mouseX <= instructions.width+instructions.x && 
    mouseY >= instructions.y && mouseY <= instructions.height+instructions.y) {
    state = "howTo";
  }
}

function showInstructions() {
  background(104, 204, 191);
  textSize(10);
  fill(200);
  textAlign(CENTER, CENTER);
  text("fruit will fall from the sky! use the arrow keys to move and catch the fruit in your basket!"+ 
  " try to catch as many as you can. when "+fruitLimit+" of fruit touch the ground, the game is over.");
  //was having trouble with text showing up here (when my live server worked) and sent messages to the console before and after
  //the text was "shown". still not sure what's wrong.

  rect(backButton.x, backButton.y, backButton.width, backButton.height);
  if (mouseIsPressed && mouseX >= backButton.x && mouseX <= backButton.width &&
  mouseY >= backButton.y && mouseY <= backButton.height) {
    state = "startMenu";
  }
}

function selectGameMode() {
  catchCounter = 0;
  dropCounter = 0;
  background(104, 204, 191);
  image(easyButton, windowWidth/2, windowHeight*1/6);
  image(normalButton, windowWidth/2, windowHeight*1/3);
  image(hardButton, windowWidth/2, windowHeight*1/2);
  if (mouseIsPressed) {
    if (mouseY > 0 && mouseY < windowHeight*1/3) {
      difficulty = "easy";
    }
    else if (mouseY > windowHeight*1/3 && mouseY < windowHeight*1/2) {
      difficulty = "normal";
    }
    else if (mouseY > windowHeight*1/2 && mouseY < windowHeight) {
      difficulty = "hard";
    }
  }
}

function fruitInterval() {
  fruitInt = window.setInterval(addFruit, 1000);
}

//actual gameplay (array) stuff
function displayFruit() {
  for (let item = 0; item < fruitArray.length; item++) {
    fruitArray[item].fruit; //feels like i need more to this
  }
}

function moveFruit() {
  for (let item = 0; item < fruitArray.length; item++) {
    fruitArray[item].y += fruitArray[item].dy;
  }
}

function addFruit() {
  let newFruit;
  if (difficulty === "easy") {
    newFruit = image(apple, easy.x, easy.y);
  }
  if (difficulty === "normal") {
    newFruit = image(orange, normal.x, normal.y); 
  }
  if (difficulty === "hard") {
    newFruit = image(peach, hard.x, hard.y);  
  }
  fruitArray.push(newFruit);
}

function userBasket() {
  basket = rect(mouseX, windowHeight, 25, 25);
}

function checkCollision() {
  for (let item = 0; item < fruitArray.length; item++) {
    //if in basket, adds to caught counter & removes fruit
    if (fruitArray[item].x >= mouseX - 25/2 && fruitArray[item].x <= mouseX + 25/2 && 
      fruitArray[item].y > windowHeight - 25) {
      catchCounter++;
      fruitArray.splice(item, 1);
    }
    //if on ground, removes and adds to drop counter
    else if (fruitArray[item].y === windowHeight) {
      dropCounter++;
      fruitArray.splice(item, 1);
    }
  }
}

function displayCounters() {
  text("fruit dropped: "+dropCounter, windowWidth - 50, 20);
  text("fruit caught: "+catchCounter, windowWidth - 50, 50);
}

function checkDrops() {
  if (dropCounter === fruitLimit) {
    state = "gameover";
    clearInterval(fruitInt); //researched this too much but apparently it still won't work :/
  }
}

function gameOver() {
  text("you dropped 10 fruit, and the game is over. good job! you caught "+catchCounter+" fruit this round.",
    windowWidth/2, windowHeight/2);

  rect(windowWidth*2/5, windowHeight*3/4, windowWidth/5, windowHeight/8);
  text("return to main menu", windowWidth/2, windowHeight*3/4);

  if (mouseIsPressed && mouseX >= windowWidth*2/5 && mouseX <= windowWidth*3/5 && 
    mouseY >= windowHeight*3/4 && mouseY <= windowHeight*7/8) {
    state = "startMenu";
  }
}
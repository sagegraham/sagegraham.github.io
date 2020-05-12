// Grid Project
// Sage Graham
// 05/11/20
//
// Additional Notes:
//    in the event of a tie, the board must be filled completely before a message will appear.
//    the page must be refreshed for the game to be restarted.
//    Daniel Shiffman's "game of life" coding video was my (only) reference for this project.
//
// Extra for Experts:
// - nothing (haha)

let cols;
let rows;
let state;
let player; //a boolean for easier 'oppositification'; true represents X and vice versa for O.
let turn;
let grid;
let recentX;
let recentY;
let counter;

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(600, 600);
  background(255);
  cols =3;
  rows = 3;
  counter = 0;
  turn = 1;
  grid = make2DArray(cols, rows);
  for (let i = 0; i<rows; i++) {
    for (let j = 0; j<rows; j++) {
      grid[i][j] = 0;
    }
  }
  player = true;
  state = "standby";
  textSize(60);
  textAlign(CENTER);
}

function draw() {
  showGrid(cols, rows);
  showTurn(turn);

  if (player && state === "standby") {
    turn = 1; //1 is X and 2 is O
    selectSpace(turn);
  }
  else if (!player && state === "standby") {
    turn = 2;
    selectSpace(turn);
  }
  else if (state === "checkForWin") {
    checkWin(turn, recentX, recentY);
  }
  else if (state === "xWin") {
    background(255);
    textSize(20);
    textAlign(LEFT);
    fill(0);
    text("congratulations player X! you have won the match.", 0, 300);
  }
  else if (state === "oWin") {
    background(255);
    textSize(20);
    textAlign(LEFT);
    fill(0);
    text("congratulations player O! you have won the match.", 0, 300);
  }
  else if (state === "tie") {
    background(255);
    textSize(20);
    textAlign(LEFT);
    fill(0);
    text("try again next time! this match was a tie.", 0, 300);
  }
}

function showGrid(cols, rows) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      noFill();
      rect(200*i, 200*j, 200, 200);
      fill(0);
      textSize(70);
      textAlign(CENTER, CENTER);

      //showing the letters of claimed spaces
      if (grid[i][j] === 1) {
        text("X", 200*i + 100, 200*j + 100);
      }
      else if (grid[i][j] === 2) {
        text("O", 200*i + 100, 200*j + 100);
      }
    }
  }
}

function showTurn(turn) {
  if (turn === 1) {
    rect(0,0,200,40);
    textAlign(LEFT);
    textSize(25);
    fill(255);
    text("Player X's turn.", 0, 22);
  }
  else if (turn === 2) {
    rect(0,0,200,40);
    textAlign(LEFT);
    textSize(25);
    fill(255);
    text("Player O's turn.", 0, 22);
  }
}

//saves values of the most recently claimed space (and claims the space)
function selectSpace(turn) {
  if (mouseIsPressed) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (mouseX < 600/3+200*i && mouseX > 600/3+200*(i-1) && mouseY < 600/3+200*j && mouseY > 600/3+200*(j-1) && grid[i][j] === 0) {
          recentX = i;
          recentY = j;
          grid[i][j] = turn;
          
          state = "checkForWin";
        }
      }
    }
  }
}

function checkWin(turn, recentX, recentY) {
  //long process of all the possible winning combinations
  if (recentX === 0 && recentY === 0) {
    if (grid[1][0] === turn && grid[2][0] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }

    if (grid[1][1] === turn && grid[2][2] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }

    if (grid[0][1] === turn && grid[0][2] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }
  }

  if (recentX === 1 && recentY === 0) {
    if (grid[0][0] === turn && grid[2][0] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }

    if (grid[1][1] === turn && grid[1][2] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }
  }

  if (recentX === 2 && recentY === 0) {
    if (grid[0][0] === turn && grid[1][0] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }

    if (grid[1][1] === turn && grid[0][2] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }

    if (grid[2][1] === turn && grid[2][2] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }
  }

  if (recentX === 0 && recentY === 1) {
    if (grid[0][0] === turn && grid[0][2] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }

    if (grid[1][1] === turn && grid[2][1] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }
  }

  if (recentX === 1 && recentY === 1) {
    if (grid[0][1] === turn && grid[2][1] === turn) { //horizontal
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }

    if (grid[1][0] === turn && grid[1][2] === turn) { //vertical
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }

    if (grid[0][0] === turn && grid[2][2] === turn) { //diagonal L->R
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }
    if (grid[2][0] === turn && grid[0][2] === turn) { //diagonal R->L
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }
  }

  if (recentX === 2 && recentY === 1) {
    if (grid[0][1] === turn && grid[1][1] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }

    if (grid[2][0] === turn && grid[2][2] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }
  }

  if (recentX === 0 && recentY === 2) {
    if (grid[1][2] === turn && grid[2][2] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }

    if (grid[1][1] === turn && grid[2][0] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }
    if (grid[0][1] === turn && grid[0][0] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }
  }

  if (recentX === 1 && recentY === 2) {
    if (grid[0][2] === turn && grid[2][2] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }

    if (grid[1][1] === turn && grid[1][0] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }
  }

  if (recentX === 2 && recentY === 2) {
    if (grid[0][2] === turn && grid[1][2] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }

    if (grid[2][0] === turn && grid[2][1] === turn) {
      if (turn === 1) {
        state = "xWin";
        return;
      }
      else {
        state = "oWin";
        return;
      }
    }
  }
  //changing state
  counter = 0;
  for (let i = 0; i<rows; i++) {
    for (let j = 0; j<cols; j++) {
      if (grid[i][j] !== 0) {
        counter++;
      }
    }
  }
  if (counter === 9) {
    state = "tie";
    return;
  }

  player = !player;
  state = "standby";
}


// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function make2DArray(cols, rows) { //empty array
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
let grid;
let cols;
let rows;
let resolution = 40;

function setup() {
  background(255);
  createCanvas(400, 400);
  cols = width/resolution;
  rows = height/resolution;
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {

  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i*resolution;
      let y = j*resolution;
      if (grid[i][j] === 1) {
        fill(255);
      }
      else {
        fill(0);
      }

      rect(x,y,resolution-1,resolution-1); //res-1 makes it so the grid is visible
    }
  }
  let next = make2DArray(cols, rows);
//compute next based on grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {

      //count live neighbours
      let sum = 0;
      let neighbours = countNeighbours(grid, i, j);

      let state = grid[i][j];
      // sum+= grid[i-1][j-1];
      // sum+= grid[i][j-1];
      // sum+= grid[i+1][j-1];
      // sum+= grid[i+1][j];
      // sum+= grid[i+1][j+1];
      // sum+= grid[i][j+1];
      // sum+= grid[i-1][j+1];
      // sum+= grid[i-1][j];

      if (state === 0 && neighbours === 3) {
        next[i][j] = 1;
      }
      else if (state === 1 && (neighbours<2 || neighbours >3)) {
        next[i][j] = 0;
      }
      else {
        next[i][j] = state;
      }
    
    }
  }

  grid = next;
}

function countNeighbours(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) { //bcs 0 to 9
    for (let j = -1; j < 2; j++) {
      let col = (x+1+cols) % cols;
      let row = (x+1+rows) % rows;
      sum += grid[col][row]; //wrap
    }
  }
  sum -= grid[x][y]; //dont want to count myself
  return sum;
}
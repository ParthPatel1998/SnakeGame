var snake;  // snake variable to represent the snake object

// setup function by p5 framework to give us the
//    setup of the canvas and the snake object
function setup(){
  createCanvas(600, 600);
  snake = new Snake();
}

// p5 draw function dwars the background and the snake
function draw() {
  background(50);
  snake.update();
  snake.show();
}

// Snake Constructor function
function Snake() {
  // initial values of the snake
  this.x = 0;
  this.y = 0;
  this.xspeed = 0;
  this.yspeed = 0;

// Draws the Snake using p5 on the canvas
  this.show = function() {
    fill(255);
    rect(this.x, this.y, 35, 35);
  }

// Moves the Snake around the grid based on itsx, y speeds
  this.update = function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

// changes the speed in the direction given to the function
  this.direction = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
}


// Keyboard Controls of the snake
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            snake.direction(-2, 0);
            break;
        case 38:
            snake.direction(0, -2);
            break;
        case 39:
            snake.direction(2, 0);
            break;
        case 40:
            snake.direction(0, 2);
            break;
    }
};
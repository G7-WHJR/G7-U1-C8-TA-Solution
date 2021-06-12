var ball;
var topEdge, bottomEdge, leftEdge, rightEdge;

function setup() {
  createCanvas(450, 400);

  //ball
  ball = createSprite(150, 250, 15, 15);
  ball.shapeColor = "orange";

  //Top Edge
  topEdge = createSprite(225, 0, 450, 5);
  topEdge.shapeColor = "gray";
  topEdge.immovable = true;

  //Bottom Edge
  bottomEdge = createSprite(225, 400, 450, 5);
  bottomEdge.shapeColor = "gray";
  bottomEdge.immovable = true;

  //Left Edge
  leftEdge = createSprite(0, 200, 5, 400);
  leftEdge.shapeColor = "gray";
  leftEdge.immovable = true;

  //Right Edge
  rightEdge = createSprite(450, 200, 5, 400);
  rightEdge.shapeColor = "gray";
  rightEdge.immovable = true;
}

function draw() {
  background("honeydew");

  ball.bounce(leftEdge);
  ball.bounce(rightEdge);
  ball.bounce(bottomEdge);
  ball.bounce(topEdge);

  if (mouseIsPressed) {
    ball.velocity.x = 1; // Left or Right
    ball.velocity.y = 1; // Top to Bottom
    ball.setSpeed(4);
  }

  drawSprites();
}

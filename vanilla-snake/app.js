canv = document.getElementById("canvas");
ctx = canv.getContext("2d");
document.addEventListener("keydown", keyPush);
setInterval(game, 1000 / 15);

function keyPush(event) {
  switch (event.keyCode) {
    case 37:
      xVelocity = -1;
      yVelocity = 0;
      break;
    case 38:
      xVelocity = 0;
      yVelocity = -1;
      break;
    case 39:
      xVelocity = 1;
      yVelocity = 0;
      break;
    case 40:
      xVelocity = 0;
      yVelocity = 1;
      break;
  }
}

playerX = playerY = 10;
gridSize = tileCount = 20;
appleX = appleY = 15;
xVelocity = yVelocity = 0;
trail = [];
tail = 5;

function game() {
  setupCanvas();
  updateVelocity();
  checkPlayerHitWall();
  drawSnake();
  checkPlayerGetApple();
}

function setupCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
}

function updateVelocity() {
  playerX += xVelocity;
  playerY += yVelocity;
}

function checkPlayerHitWall() {
  if (playerX < 0 || playerX > tileCount - 1) {
    console.log("game over");
  }
  if (playerY < 0 || playerY > tileCount - 1) {
    console.log("game over");
  }
}

function drawSnake() {
  ctx.fillStyle = "lime";
  for (var i = 0; i < trail.length; i++) {
    ctx.fillRect(
      trail[i].x * gridSize,
      trail[i].y * gridSize,
      gridSize - 2,
      gridSize - 2
    );
    // ran into self :()
    if (trail[i].x == playerX && trail[i].y == playerY) {
      tail = 5;
    }
  }
  trail.push({ x: playerX, y: playerY });
  while (trail.length > tail) {
    trail.shift();
  }
}

function checkPlayerGetApple() {
  if (appleX == playerX && appleY == playerY) {
    tail++;
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(
    appleX * gridSize,
    appleY * gridSize,
    gridSize - 2,
    gridSize - 2
  );
}

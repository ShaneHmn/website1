const ball = document.createElement('div');
const ballRadius = 15; // Set radius
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

let ballXPosition = windowWidth / 2 - ballRadius;
let ballYPosition = windowHeight / 2 - ballRadius;
let ballSpeed = 5;
let ballXDirection = 1;
let ballYDirection = 1;

// Paddle Setup
const LPadel = document.createElement('div');
const LPadelWidth = 15;
const LPadelHeight = 150;
const LPadelSpeed = 10;
const LPadelXPosition = 50;
let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2;

let wkey = false;
let skey = false;

document.body.style.backgroundColor = "#c7eced";

function createBall() {
    document.body.appendChild(ball);
    ball.style.height = `${2 * ballRadius}px`;
    ball.style.width = `${2 * ballRadius}px`;
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "#110d54";
    ball.style.position = "absolute";
    document.body.style.overflow = "hidden"; // Prevent scrollbars
    document.body.style.margin = "0";
}

function createLPadel() {
    document.body.appendChild(LPadel);
    LPadel.style.borderRadius = '15px';
    LPadel.style.height = `${LPadelHeight}px`;
    LPadel.style.width = `${LPadelWidth}px`;
    LPadel.style.backgroundColor = "#ad0f07";
    LPadel.style.position = 'absolute';
    LPadel.style.left = `${LPadelXPosition}px`;
    LPadel.style.top = `${LPadelYPosition}px`;
}

function moveBall() {
    ballXPosition += ballSpeed * ballXDirection;
    ballYPosition += ballSpeed * ballYDirection;

    if (ballYPosition <= 0 || ballYPosition >= windowHeight - (ballRadius * 2)) {
        ballYDirection *= -1;
    }

    if (ballXPosition >= windowWidth - (ballRadius * 2)) {
        ballXDirection *= -1;
    }

    if (ballXPosition <= 0) {
        // Reset Ball
        ballXPosition = windowWidth / 2;
        ballXDirection *= -1;
    }

    // Paddle Collision
    const ballTop = ballYPosition;
    const ballBottom = ballYPosition + (ballRadius * 2);
    const ballLeft = ballXPosition;

    const paddleRight = LPadelXPosition + LPadelWidth;
    const paddleTop = LPadelYPosition;
    const paddleBottom = LPadelYPosition + LPadelHeight;

    if (
        ballLeft <= paddleRight &&
        ballLeft >= LPadelXPosition &&
        ballBottom >= paddleTop &&
        ballTop <= paddleBottom &&
        ballXDirection == -1 // Only bounce if moving towards the paddle
    ) {
        // Increase speed on hit
        ballXDirection *= -1;
        updateScore();
        ballSpeed = Math.min(ballSpeed + 0.9, 18);
    }

    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
}

function moveLPadel() {
    if (wkey && LPadelYPosition > 0) {
        LPadelYPosition -= LPadelSpeed;
    }
    if (skey && LPadelYPosition < windowHeight - LPadelHeight) {
        LPadelYPosition += LPadelSpeed;
    }
    LPadel.style.top = `${LPadelYPosition}px`;
}

document.addEventListener('keydown', (e) => {
  if (e.code == 'KeyW') wkey = true;
  if (e.code == 'KeyS') skey = true;
});

document.addEventListener('keyup', (e) => {
  if (e.code == 'KeyW') wkey = false;
  if (e.code == 'KeyS') skey = false;
});

function animate() {
    moveBall();
    moveLPadel();
    requestAnimationFrame(animate);
}

let score = 0;
const scoreDisplay = document.createElement('div');

function createScore() {
    scoreDisplay.style.position = 'absolute';
    scoreDisplay.style.top = '20px';
    scoreDisplay.style.left = '50%';
    scoreDisplay.style.transform = 'translateX(-50%)';
    scoreDisplay.style.fontSize = '20px';
    scoreDisplay.style.color = 'black';
    scoreDisplay.innerText = `Score: ${score}`;
    document.body.appendChild(scoreDisplay);
}

function updateScore() {
    score++;
    scoreDisplay.innerText = `Score: ${score}`;
}

// Initialize
createBall();
createLPadel();
createScore();
animate();

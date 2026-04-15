const ball = document.createElement('div')
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1

const LPadel = document.createElement('div')
let LPadelWidth = 10
let LPadelHeight = 150
let LPadelSpeed = 20
let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2
let LPadelXPosition = ?

const RPadel = document.createElement('div')
let RPadelWidth = 10
let RPadelHeight = 150
let RPadelSpeed = 20
let RPadelYPosition = windowHeight / 2 - RPadelHeight / 2

// For when ball bounces on Paddles
let ballTop = ballYPosition
let ballBottom = ballYPosition + 2 * ballRadius
let ballLeft = ballXPosition
let LPadelBottom = LPadelYPosition + LPadelHeight
let LPadelRight = LPadelXPosition + LPadelWidth


setInterval(moveBall, 10)

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius){
        ballXDirection = ballXDirection * -1
    }
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }
    if (
        (ballBottom >= LPadelTop) &&
        (ballTop <= LPadelBottom) &&
        (ballLeft <= LPadelRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
    }
}


createBall()
function createBall(){
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${windowWidth/2 - ballRadius}px`
}


function animate() {
    moveBall()
    moveLPadel()
    requestAnimationFrame(animate)
}
animate()


createLPadel()
function createLPadel() {
    document.body.appendChild(LPadel)
    LPadel.style.height = `${LPadelHeight}px`
    LPadel.style.width = `${LPadelWidth}px`
    LPadel.style.backgroundColor = "blue"
    LPadel.style.position = 'absolute'
    LPadel.style.left = "50px"
    LPadel.style.top = `${LPadelYPosition}px`
}

createRPadel()
function createRPadel() {
    document.body.appendChild(RPadel)
    RPadel.style.height = `${RPadelHeight}px`
    RPadel.style.width = `${RPadelWidth}px`
    RPadel.style.backgroundColor = "blue"
    RPadel.style.position = 'absolute'
    RPadel.style.right = "50px"
    RPadel.style.top = `${RPadelYPosition}px`
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        if (LPadelYPosition <= 0) {
            LPadelYPosition = 0
        }
        else {
            LPadelYPosition = LPadelYPosition - LPadelSpeed
        }
    }
    if (event.key == 's') {
        if (LPadelYPosition >= windowHeight - LPadelHeight) {
            LPadelYPosition = windowHeight - LPadelHeight
        }
        else {
        LPadelYPosition = LPadelYPosition + LPadelSpeed
        }
    }
    LPadel.style.top = `${LPadelYPosition}px`
})

document.addEventListener('keydown', (event) => {
    if (event.key == 'i') {
        if (RPadelYPosition <= 0) {
            RPadelYPosition = 0
        }
        else {
            RPadelYPosition = RPadelYPosition - RPadelSpeed
        }
    }
    if (event.key == 'k') {
        if (RPadelYPosition >= windowHeight - RPadelHeight) {
            RPadelYPosition = windowHeight - RPadelHeight
        }
        else {
        RPadelYPosition = RPadelYPosition + RPadelSpeed
        }
    }
    RPadel.style.top = `${RPadelYPosition}px`
})

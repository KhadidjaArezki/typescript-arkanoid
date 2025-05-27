import { CanvasView } from "./view/CanvasView"
import { Brick } from "./sprites/Brick"
import { Ball } from "./sprites/Ball"
import { Paddle } from "./sprites/Paddle"
import { Collision } from "./Collision"

import PADDLE_IMAGE from './images/paddle.png'
import BALL_IMAGE from './images/ball.png'

import {
  PADDLE_SPEED,
  PADDLE_STARTX,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_PADDING,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY,
} from './setup'
import { createBricks } from "./helpers"

let gameOver = false
let score = 0

function setGameOver(view: CanvasView) {
  view.drawInfo('Game Over!')
  gameOver = false
}

function setGameWon(view: CanvasView) {
  view.drawInfo('Game Won!')
  gameOver = false
}

function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball,
  collision: Collision,
) {
  view.clear()
  view.drawBricks(bricks)
  view.drawSprite(paddle)
  view.drawSprite(ball)
  ball.moveBall()

  // Move paddle when it's inside play field
  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
  ) {
    paddle.movePaddle()
  }

  // Check if the ball hit the paddle or the walls
  collision.checkBallCollision(ball, paddle, view)

  // Check if the ball hit one of the bricks
  const isCollidingBrick = collision.isCollidingBricks(ball, bricks)
  if (isCollidingBrick) {
    score += 1
    view.drawScore(score)
  }

  // Game over when ball leaves play field
  if (ball.pos.y > view.canvas.height) gameOver = true

  // If user wins or looses game, break the loop
  if (bricks.length === 0) {
    return setGameWon(view)
  }

  if (gameOver) {
    return setGameOver(view)
  }

  // Keep the game running until we break the loop
  requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision))
}

function startGame(view: CanvasView) {
  score = 0
  view.drawInfo('')
  view.drawScore(score)
  const collision = new Collision()

  const bricks = createBricks()
  const paddle = new Paddle(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_STARTX,
      y: view.canvas.height - PADDLE_HEIGHT - PADDLE_PADDING,
    },
    PADDLE_IMAGE,
  )
  const ball = new Ball(
    BALL_SIZE,
    {
      x: BALL_STARTX,
      y: BALL_STARTY
    },
    BALL_SPEED,
    BALL_IMAGE
  )
  gameLoop(view, bricks, paddle, ball, collision)
}

const view = new CanvasView('#playField')
view.initStartButton(startGame)

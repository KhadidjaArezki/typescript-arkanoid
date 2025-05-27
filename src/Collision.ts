import { Brick } from "./sprites/Brick"
import { Paddle } from "./sprites/Paddle"
import { Ball } from "./sprites/Ball"
import { CanvasView } from "./view/CanvasView"
import { PADDLE_PADDING } from "./setup"

export class Collision {
  isCollidingBrick(ball: Ball, brick: Brick): boolean {
    if (
      (ball.pos.x + ball.width > brick.pos.x) &&    // ball is within bricks width range
      (ball.pos.x < brick.pos.x + brick.width) &&
      (ball.pos.y < brick.pos.y + brick.height) && // ball touches brick top
      (ball.pos.y + ball.height > brick.pos.y)     // ball touches brick bottom
    ) {
      return true
    }
    return false
  }

  // Check for ball collision with bricks and update state
  isCollidingBricks(ball: Ball, bricks: Brick[]): boolean {
    let colliding = false
    bricks.forEach((brick, i) => {
      if (this.isCollidingBrick(ball, brick)) {
        ball.changeYDirection()
        if (brick.energy === 1) {
          bricks.splice(i, 1)
        } else {
          brick.energy -= 1
        }
        colliding = true
      }
    })
    return colliding
  }

  checkBallCollision(ball: Ball, paddle: Paddle, view: CanvasView) {
    // First check collision with paddle
    if (
      // if the ball's left edge is within the paddle's width range
      (ball.pos.x + ball.width > paddle.pos.x) &&
      (ball.pos.x < paddle.pos.x + paddle.width) &&
      // If the ball touches the paddle
      (ball.pos.y === paddle.pos.y - paddle.height + PADDLE_PADDING)
    ) {
      ball.changeYDirection()
    }

    // Second check collission with side walls
    if (ball.pos.x < 0 || (ball.pos.x + ball.width > view.canvas.width)) {
      ball.changeXDirection()
    }
    // Last check collision with top wall
    if (ball.pos.y < 0) {
      ball.changeYDirection()
    }
  }
}

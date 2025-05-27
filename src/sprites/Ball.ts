import type { Vector } from "../types"
import { Sprite } from "./Sprite"

export class Ball extends Sprite {
  private speed: Vector

  constructor(
    ballSize: number,
    ballPosition: Vector,
    speed: number,
    image: string,
  ) {
    super(
      ballSize,
      ballSize,
      ballPosition,
      image,
    )
    this.speed = {
      x: speed,
      y: -speed,
    }
  }

  /**
   * Reverses the ball's Y direction (e.g., when hitting the paddle or top wall).
   */
  changeYDirection(): void {
    this.speed.y = -this.speed.y
  }

  /**
   * Reverses the ball's X direction (e.g., when hitting side walls).
   */
  changeXDirection(): void {
    this.speed.x = -this.speed.x
  }

  /**
   * Moves the ball based on its current speed.
   * Should be called every frame inside the game loop.
   */
  moveBall(): void {
    this.pos.x += this.speed.x
    this.pos.y += this.speed.y
  }
}

import type { Vector } from "../types";
import { Sprite } from "./Sprite";

export class Paddle extends Sprite {
  private moveLeft: boolean
  private moveRight: boolean

  constructor(
    private speed: number,
    paddleWidth: number,
    paddleHeight: number,
    paddlePosition: Vector,
    image: string,
  ) {
    super(
      paddleWidth,
      paddleHeight,
      paddlePosition,
      image,
    )
    this.speed = speed
    this.moveLeft = false
    this.moveRight = false

    document.addEventListener('keydown', this.handleKeydown)
    document.addEventListener('keyup', this.handleKeyup)
  }

  /** Check if the paddle is moving left */
  get isMovingLeft(): boolean {
    return this.moveLeft
  }

  /** Check if the paddle is moving right */
  get isMovingRight(): boolean {
    return this.moveRight
  }

  /**
   * Moves the paddle left or right based on internal state.
   * Should be called every frame inside the game loop.
   */
  movePaddle(): void {
    if (this.moveLeft) this.pos.x -= this.speed
    if (this.moveRight) this.pos.x += this.speed
  }

  handleKeyup = (e: KeyboardEvent): void => {
    if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') {
      this.moveLeft = false
    }
    if (e.code === 'ArrowRight' || e.key === 'ArrowRight') {
      this.moveRight = false
    }
  }

  handleKeydown = (e: KeyboardEvent): void => {
    if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') {
      this.moveLeft = true
    }
    if (e.code === 'ArrowRight' || e.key === 'ArrowRight') {
      this.moveRight = true
    }
  }
}

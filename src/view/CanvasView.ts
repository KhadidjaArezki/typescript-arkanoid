// Typescript creates a type for each class
import { Ball } from "../sprites/Ball"
import { Brick } from "../sprites/Brick"
import { Paddle } from "../sprites/Paddle"
import type { Sprite } from "../sprites/Sprite"
/**
 * Class representing the Canvas View and UI elements.
 * Handles all rendering and user interface updates.
 */
export class CanvasView {
  canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D | null
  private scoreDisplay: HTMLObjectElement | null
  private start: HTMLObjectElement | null
  private info: HTMLObjectElement | null

  constructor(canvasSelector: string) {
    this.canvas = document.querySelector(canvasSelector) as HTMLCanvasElement
    this.context = this.canvas.getContext('2d')
    this.scoreDisplay = document.querySelector('#score')
    this.start = document.querySelector('#start')
    this.info = document.querySelector('#info')
  }

  /**
   * Clears the entire canvas.
   * Call this at the start of every game frame to reset the drawing area.
   */
  clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  /**
   * Initializes the Start Button with a callback that starts the game.
   * @param startFunction - Function to call when the Start button is clicked.
   */
  initStartButton(startFunction: (view: CanvasView) => void): void {
    this.start?.addEventListener('click', () => startFunction(this))
  }

  /**
   * Draws the current score on the UI.
   * @param score - The current player score to display.
   */
  drawScore(score: number): void {
    if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString()
  }

  /**
   * Draws informational text (e.g., Game Over, Win) in the UI.
   * @param text - The text to display.
   */
  drawInfo(text: string): void {
    if (this.info) this.info.innerHTML = text
  }

  /**
   * Draws a single sprite (Ball, Paddle, Brick) onto the canvas.
   * @param sprite - The sprite to draw.
   */
  drawSprite(sprite: Sprite): void {
    if (!sprite) return
    this.context?.drawImage(
      sprite.image,
      sprite.pos.x,
      sprite.pos.y,
      sprite.width,
      sprite.height,
    )
  }

  /**
   * Draws an array of bricks.
   * @param bricks - The list of bricks to draw.
   */
  drawBricks(bricks: Brick[]): void {
    bricks.forEach(brick => this.drawSprite(brick))
  }
}

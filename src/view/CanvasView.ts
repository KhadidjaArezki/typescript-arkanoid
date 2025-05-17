// Typescript creates a type for each class
import { Ball } from "../sprites/Ball"
import { Brick } from "../sprites/Brick"
import { Paddle } from "../sprites/Paddle"
/**
 * Class representing the Canvas View and UI elements.
 * Handles all rendering and user interface updates.
 */
export class CanvasView {
  private canvas: HTMLCanvasElement
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
    
  }

  /**
   * Initializes the Start Button with a callback that starts the game.
   * @param startFunction - Function to call when the Start button is clicked.
   */
  initStartButton(startFunction: (view: CanvasView) => void): void;

  /**
   * Draws the current score on the UI.
   * @param score - The current player score to display.
   */
  drawScore(score: number): void;

  /**
   * Draws informational text (e.g., Game Over, Win) in the UI.
   * @param text - The text to display.
   */
  drawInfo(text: string): void;

  /**
   * Draws a single sprite (Ball, Paddle, Brick) onto the canvas.
   * @param sprite - The sprite to draw.
   */
  drawSprite(sprite: Sprite): void;

  /**
   * Draws an array of bricks.
   * @param bricks - The list of bricks to draw.
   */
  drawBricks(bricks: Brick[]): void;
}

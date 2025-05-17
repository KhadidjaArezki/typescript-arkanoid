import type { Vector } from "../types";

export class Ball {
  constructor(

  );

  /** Getter for ball's width */
  get width(): number;

  /** Getter for ball's height */
  get height(): number;

  /** Getter for ball's position */
  get pos(): { x: number; y: number };

  /** Getter for ball's image */
  get image(): HTMLImageElement;

  /**
   * Reverses the ball's Y direction (e.g., when hitting the paddle or top wall).
   */
  changeYDirection(): void;

  /**
   * Reverses the ball's X direction (e.g., when hitting side walls).
   */
  changeXDirection(): void;

  /**
   * Moves the ball based on its current speed.
   * Should be called every frame inside the game loop.
   */
  moveBall(): void;
}

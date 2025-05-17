import type { Vector } from "../types";

export class Paddle {
  constructor(

  );

  /** Getter for paddle's width */
  get width(): number;

  /** Getter for paddle's height */
  get height(): number;

  /** Getter for paddle's position */
  get pos(): { x: number; y: number };

  /** Getter for paddle's image */
  get image(): HTMLImageElement;

  /** Check if the paddle is moving left */
  get isMovingLeft(): boolean;

  /** Check if the paddle is moving right */
  get isMovingRight(): boolean;

  /**
   * Moves the paddle left or right based on internal state.
   * Should be called every frame inside the game loop.
   */
  movePaddle(): void;
}

import type { Vector } from "../types";

export class Brick {
  constructor(

  );

  /** Getter for the brick's width */
  get width(): number;

  /** Getter for the brick's height */
  get height(): number;

  /** Getter for the brick's position */
  get pos(): { x: number; y: number };

  /** Getter for the brick's image */
  get image(): HTMLImageElement;

  /** Getter for the brick's energy */
  get energy(): number;

  /** Setter to update the brick's energy level */
  set energy(value: number);
}

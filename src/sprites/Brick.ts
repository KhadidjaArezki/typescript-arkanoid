import type { Vector } from "../types";
import { Sprite } from "./Sprite";

export class Brick extends Sprite {
  constructor(
    brickWidth: number,
    brickHeight: number,
    position: Vector,
    private brickEnergy: number,
    image: string,
  ) {
    super(
      brickWidth,
      brickHeight,
      position,
      image,
    )
    this.brickEnergy = brickEnergy
  }

  /** Getter for the brick's energy */
  get energy(): number {
    return this.brickEnergy
  }

  /** Setter to update the brick's energy level */
  set energy(value: number) {
    this.brickEnergy = value
  }
}

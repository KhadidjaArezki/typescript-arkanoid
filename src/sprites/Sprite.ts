import type { Vector } from "../types";

export class Sprite {
  private spriteImage: HTMLImageElement = new Image()

  constructor(
    private spriteWidth: number,
    private spriteHeight: number,
    private spritePosition: Vector,
    image: string,
  ) {
    this.spriteWidth = spriteWidth
    this.spriteHeight = spriteHeight
    this.spritePosition = spritePosition
    this.spriteImage.src = image
  }


  /** Getter for the brick's width */
  get width(): number {
    return this.spriteWidth
  }

  /** Getter for the brick's height */
  get height(): number {
    return this.spriteHeight
  }

  /** Getter for the brick's position */
  get pos(): { x: number; y: number } {
    return this.spritePosition
  }

  /** Getter for the brick's image */
  get image(): HTMLImageElement {
    return this.spriteImage
  }

}

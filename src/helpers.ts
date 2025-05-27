import { Brick } from "./sprites/Brick"
import {
  BRICK_IMAGES,
  LEVEL,
  STAGE_COLS,
  STAGE_PADDING,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_PADDING,
  BRICK_ENERGY,
} from './setup'

export function createBricks(): Brick[] {
  return LEVEL.reduce((bricks, cell, i) => {
    if (cell === 0) return bricks
    const row = Math.floor((i + 1) / STAGE_COLS)
    const col = i % STAGE_COLS

    const brickX = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING)
    const brickY = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING)

    return [
      ...bricks,
      new Brick(
        BRICK_WIDTH,
        BRICK_HEIGHT,
        { x: brickX, y: brickY },
        BRICK_ENERGY[cell],
        BRICK_IMAGES[cell],
      )
    ]
  }, [] as Brick[])
}

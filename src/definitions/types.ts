import { ROTATE, SIZES } from "."

export type IconType = {
  color?: string
  size?: SIZES | string
  rotate?: ROTATE
  height?: string
  scale?: string
  width?: string
  ariaLabel?: string
  className?: string
}

export type CoordsType = {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

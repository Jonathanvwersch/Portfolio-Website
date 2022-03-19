import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Svg } from "."
import { IconType } from "../definitions"

const MenuIcon: React.FC<IconType> = ({ color, size }) => {
  const theme = useContext(ThemeContext)
  const iconColor = color ? color : theme.colors.iconColor

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M2 12H14V10.6667H2V12ZM2 8.66667H14V7.33333H2V8.66667ZM2 4V5.33333H14V4H2Z"
        fill={iconColor}
      />
    </Svg>
  )
}

export default MenuIcon

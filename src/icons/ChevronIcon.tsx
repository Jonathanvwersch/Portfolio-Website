import React, { useContext } from "react"
import { ThemeType } from "../theme/theme"
import { ThemeContext } from "styled-components"
import { Svg } from "."
import { IconType } from "../typesAndEnums"

const ChevronIcon: React.FC<IconType> = ({ color, size, rotate }) => {
  const theme: ThemeType = useContext(ThemeContext)
  const iconColor = color ? color : theme.colors.iconColor

  return (
    <Svg size={size} rotate={rotate} viewBox="0 0 16 16" fill="none">
      <path
        d="M5.72656 11.06L8.7799 8L5.72656 4.94L6.66656 4L10.6666 8L6.66656 12L5.72656 11.06Z"
        fill={iconColor}
      />
    </Svg>
  )
}

export default ChevronIcon

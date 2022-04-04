import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Svg } from "."
import { IconType } from "../definitions"

const PlayIcon: React.FC<IconType> = ({ color, size }) => {
  const theme = useContext(ThemeContext)
  const iconColor = color ? color : theme.colors.iconColor

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z"
        fill={iconColor}
      />
      <path
        d="M11.2406 7.79856L6.61407 4.43918C6.57696 4.41198 6.53303 4.39562 6.48717 4.39192C6.44131 4.38822 6.39532 4.39732 6.35434 4.41822C6.31335 4.43912 6.27897 4.47099 6.25503 4.51028C6.23109 4.54957 6.21853 4.59474 6.21875 4.64074V11.3595C6.21875 11.5642 6.45 11.6798 6.61407 11.5611L11.2406 8.20168C11.2726 8.17866 11.2986 8.14839 11.3165 8.11334C11.3345 8.0783 11.3438 8.03949 11.3438 8.00012C11.3438 7.96075 11.3345 7.92194 11.3165 7.8869C11.2986 7.85185 11.2726 7.82157 11.2406 7.79856V7.79856ZM7.21563 9.89231V6.10793L9.82032 8.00012L7.21563 9.89231V9.89231Z"
        fill={iconColor}
      />
    </Svg>
  )
}

export default PlayIcon

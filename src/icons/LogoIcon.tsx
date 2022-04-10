import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Svg } from "."
import { IconType } from "../definitions"

const LogoIcon = ({ color, size }: IconType) => {
  const theme = useContext(ThemeContext)
  const iconColor = color ? color : theme.colors.primary

  return (
    <Svg size={size || "40px"} viewBox="0 0 200 200" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M130.994 64L121.683 97.8021L121.696 97.805L111.723 134H96.6227L78.1227 64H91.8227L104.423 119.7L119.223 64H130.994ZM136.617 76.7402L130.518 98.8824L139.923 134H155.123L174.123 64H160.323L147.723 119.7L136.617 76.7402ZM31.1 129.5C35.2333 133.3 40.7 135.2 47.5 135.2C54.0333 135.2 59.2 133.367 63 129.7C66.8667 125.967 68.8 120.667 68.8 113.8V64H56V113.8C56 116.8 55.3 119.233 53.9 121.1C52.5 122.9 50.2667 123.8 47.2 123.8C43.9333 123.8 41.5667 122.833 40.1 120.9C38.6333 118.967 37.8667 116.367 37.8 113.1H25C25 120.167 27.0333 125.633 31.1 129.5Z"
        fill={iconColor}
      />
      <path
        d="M54.1987 20.6699C25.8568 37.0331 8.39746 67.2736 8.39746 100C8.39746 132.726 25.8568 162.967 54.1987 179.33C82.5406 195.693 117.459 195.693 145.801 179.33C174.143 162.967 191.603 132.726 191.603 100C191.603 67.2736 174.143 37.0331 145.801 20.6699C117.459 4.30666 82.5406 4.30666 54.1987 20.6699Z"
        stroke={iconColor}
        strokeWidth="10"
      />
    </Svg>
  )
}

export default LogoIcon

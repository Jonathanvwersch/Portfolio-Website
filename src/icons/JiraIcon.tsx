import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Svg } from "."
import { IconType } from "../definitions"

const GitIcon: React.FC<IconType> = ({ color, size }) => {
  const theme = useContext(ThemeContext)
  const iconColor = color ? color : theme.colors.iconColor

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_560_872)">
        <path
          d="M8.00267 0C6.436 1.59667 6.426 4.12333 8.09133 5.72333L10.366 7.99867L8.23467 10.1307C8.83516 10.7341 9.24466 11.5009 9.41206 12.3356C9.57947 13.1702 9.49737 14.0357 9.176 14.824L15.5533 8.44667C15.6122 8.38785 15.6589 8.31801 15.6907 8.24114C15.7226 8.16427 15.739 8.08188 15.739 7.99867C15.739 7.91546 15.7226 7.83306 15.6907 7.75619C15.6589 7.67932 15.6122 7.60948 15.5533 7.55067L8.00267 0ZM6.83733 1.16L0.446666 7.55133C0.387806 7.61015 0.341113 7.67999 0.309256 7.75686C0.277399 7.83373 0.261002 7.91612 0.261002 7.99933C0.261002 8.08254 0.277399 8.16494 0.309256 8.24181C0.341113 8.31868 0.387806 8.38852 0.446666 8.44733C2.96667 10.96 5.48 13.496 8 16C9.53 14.468 9.59667 11.936 7.94667 10.3113L5.63333 7.99867L7.76667 5.86533C6.488 4.562 6.19133 2.71533 6.83733 1.16067V1.16Z"
          fill={iconColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_560_872">
          <rect width="16" height="16" fill={iconColor} />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default GitIcon

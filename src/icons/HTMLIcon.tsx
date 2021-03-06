import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Svg } from "."
import { IconType } from "../definitions"

const GitIcon: React.FC<IconType> = ({ color, size }) => {
  const theme = useContext(ThemeContext)
  const iconColor = color ? color : theme.colors.iconColor

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 4.5V11H13V4.5H11C10.6022 4.5 10.2206 4.34196 9.93934 4.06066C9.65804 3.77936 9.5 3.39782 9.5 3V1H4C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V11H2V2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0L9.5 0L14 4.5ZM4.264 11.85V15.849H3.473V14.135H1.79V15.849H1V11.85H1.791V13.476H3.473V11.85H4.263H4.264ZM6.515 12.512V15.849H5.721V12.512H4.588V11.85H7.652V12.512H6.515V12.512ZM8.691 15.849V13.189H8.729L9.681 15.348H10.197L11.143 13.188H11.181V15.849H11.896V11.85H11.096L9.956 14.446H9.93L8.79 11.85H7.985V15.849H8.691ZM13.401 15.175H15.097V15.849H12.61V11.85H13.4V15.175H13.401Z"
        fill={iconColor}
      />
    </Svg>
  )
}

export default GitIcon

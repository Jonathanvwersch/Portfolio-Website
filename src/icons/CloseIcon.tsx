import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Svg } from "."
import { IconType } from "../definitions"

const CloseIcon = ({ color, size }: IconType) => {
  const theme = useContext(ThemeContext)
  const iconColor = color ? color : theme.colors.primary

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M12.6654 4.27398L11.7254 3.33398L7.9987 7.06065L4.27203 3.33398L3.33203 4.27398L7.0587 8.00065L3.33203 11.7273L4.27203 12.6673L7.9987 8.94065L11.7254 12.6673L12.6654 11.7273L8.9387 8.00065L12.6654 4.27398Z"
        fill={iconColor}
      />
    </Svg>
  )
}

export default CloseIcon

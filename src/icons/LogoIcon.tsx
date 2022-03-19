import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { SvgVaried } from "."
import { IconType } from "../definitions"

const LogoIcon = ({ color }: IconType) => {
  const theme = useContext(ThemeContext)
  const iconColor = color ? color : theme.colors.outline

  return (
    <SvgVaried width="40px" height="55px" viewBox="0 0 200 224" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M130.994 76L121.683 109.802L121.696 109.805L111.723 146H96.6227L78.1227 76H91.8227L104.423 131.7L119.223 76H130.994ZM136.617 88.7402L130.518 110.882L139.923 146H155.123L174.123 76H160.323L147.723 131.7L136.617 88.7402ZM31.1 141.5C35.2333 145.3 40.7 147.2 47.5 147.2C54.0333 147.2 59.2 145.367 63 141.7C66.8667 137.967 68.8 132.667 68.8 125.8V76H56V125.8C56 128.8 55.3 131.233 53.9 133.1C52.5 134.9 50.2667 135.8 47.2 135.8C43.9333 135.8 41.5667 134.833 40.1 132.9C38.6333 130.967 37.8667 128.367 37.8 125.1H25C25 132.167 27.0333 137.633 31.1 141.5Z"
        fill={iconColor}
      />
      <path
        d="M102.5 7.66987L100 6.2265L97.5 7.66987L10.8975 57.6699L8.39746 59.1132V62V162V164.887L10.8975 166.33L97.5 216.33L100 217.773L102.5 216.33L189.103 166.33L191.603 164.887V162V62V59.1132L189.103 57.6699L102.5 7.66987Z"
        stroke={iconColor}
        stroke-width="10"
      />
    </SvgVaried>
  )
}

export default LogoIcon

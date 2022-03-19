import { useContext, useLayoutEffect, useState } from "react"
import { ThemeContext } from "styled-components"

export type Layout = "vertical" | "horizontal"
export const LAYOUT_VERTICAL = "vertical"
export const LAYOUT_HORIZONTAL = "horizontal"

const useResponsiveLayout = (breakpoint?: number): Layout => {
  const theme = useContext(ThemeContext)
  const appBreakpoint = breakpoint ? breakpoint : theme.breakpoints.medium

  const [layout, setLayout] = useState(
    window.innerWidth < appBreakpoint ? LAYOUT_VERTICAL : LAYOUT_HORIZONTAL
  )

  useLayoutEffect(() => {
    setLayout(
      window.innerWidth < appBreakpoint ? LAYOUT_VERTICAL : LAYOUT_HORIZONTAL
    )
  }, [appBreakpoint])

  useLayoutEffect(() => {
    const handleResize = () =>
      setLayout(
        window.innerWidth < appBreakpoint ? LAYOUT_VERTICAL : LAYOUT_HORIZONTAL
      )
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [appBreakpoint])

  return layout as Layout
}

export default useResponsiveLayout

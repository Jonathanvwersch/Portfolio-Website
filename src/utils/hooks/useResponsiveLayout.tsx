import { useEffect, useState } from "react"

export type Layout = "vertical" | "horizontal"
export const LAYOUT_VERTICAL = "vertical"
export const LAYOUT_HORIZONTAL = "horizontal"
const BREAKPOINT = 768
const isBrowser = typeof window !== "undefined"

const useResponsiveLayout = (breakpoint?: number): Layout => {
  const appBreakpoint = breakpoint ? breakpoint : BREAKPOINT
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return width < appBreakpoint ? LAYOUT_VERTICAL : LAYOUT_HORIZONTAL
}

export default useResponsiveLayout

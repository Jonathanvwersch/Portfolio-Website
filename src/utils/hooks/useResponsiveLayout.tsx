import { useLayoutEffect, useState } from "react"

export type Layout = "vertical" | "horizontal"
export const LAYOUT_VERTICAL = "vertical"
export const LAYOUT_HORIZONTAL = "horizontal"
const BREAKPOINT = 768
const isBrowser = typeof window !== "undefined"

const useResponsiveLayout = (breakpoint?: number): Layout => {
  const appBreakpoint = breakpoint ? breakpoint : BREAKPOINT

  const [layout, setLayout] = useState(
    isBrowser && window.innerWidth < appBreakpoint
      ? LAYOUT_VERTICAL
      : LAYOUT_HORIZONTAL
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

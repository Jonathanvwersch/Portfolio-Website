import { useLayoutEffect, useState } from "react"

const useVisibleOnScreen = (
  ref?: React.MutableRefObject<undefined>,
  runOnlyOnce?: boolean
) => {
  const [isVisible, setVisible] = useState<boolean>(false)

  useLayoutEffect(() => {
    if ((runOnlyOnce ? isVisible !== true : true) && ref.current) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting))
      })
      observer.observe(ref.current)
      return () => observer.unobserve(ref.current)
    }
  }, [runOnlyOnce, isVisible])

  return isVisible
}

export default useVisibleOnScreen

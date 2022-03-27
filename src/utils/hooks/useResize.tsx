import { useEffect, useState } from "react"

type Props = {
  myRef: React.RefObject<any>
}

const useResize = ({ myRef }: Props) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleResize = () => {
    setWidth(myRef.current.clientWidth)
    setHeight(myRef.current.clientHeight)
  }
  console.log(myRef)

  useEffect(() => {
    myRef.current && myRef.current.addEventListener("resize", handleResize)

    return () => {
      myRef.current.removeEventListener("resize", handleResize)
    }
  }, [myRef])

  return { width, height }
}

export default useResize

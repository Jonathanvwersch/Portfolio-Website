import React from "react"

type Props = {
  value: string[]
}

const TagPreview = ({ value }: Props) => {
  return (
    <ul>
      {value.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </ul>
  )
}
export default TagPreview

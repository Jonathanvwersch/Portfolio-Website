import React from "react"

type Props = {
  forID: string
  field: any
  onChange: (args: any) => void
  value: string[]
  classNameWrapper: string
}

class TagControl extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const separator = this.props.field.get("separator", ", ")
    this.props.onChange(e.target.value.split(separator).map(e => e.trim()))
  }
  render() {
    const separator = this.props.field.get("separator", ", ")
    var value = this.props.value
    return React.createElement("input", {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: "text",
      value: value ? value.join(separator) : "",
      onChange: this.handleChange,
    })
  }
}

export default TagControl

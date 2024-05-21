import React from "react"

type Props = {
  text: string
}

const Paragraph = ({ text }: Props) => {
  return <p className="text-gray-600">{text}</p>
}

export default Paragraph

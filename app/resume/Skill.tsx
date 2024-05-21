import React from "react"

type Props = {
  text: string
}

const Skill = (props: Props) => {
  return (
    <h4 className="text-xs font-bold border-b m-1 border-gray-700  text-gray-600 ">
      {props.text}
    </h4>
  )
}

export default Skill

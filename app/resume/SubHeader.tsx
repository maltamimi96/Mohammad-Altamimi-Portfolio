import React from "react"

type Props = {
  title: string
}

const SubHeader = ({ title }: Props) => {
  return (
    <h2 className="uppercase text-sm  font-semibold  border-cyan-600 text-cyan-600">
      {title}
    </h2>
  )
}

export default SubHeader

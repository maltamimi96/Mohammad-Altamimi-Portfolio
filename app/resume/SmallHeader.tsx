import React from "react"

type Props = {
  title: string
}

const SmallHeader = (props: Props) => {
  return (
    <h5 className="font-semibold text-xs mt-1 capitalize">{props.title}</h5>
  )
}

export default SmallHeader

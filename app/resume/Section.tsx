import React from "react"

type Props = {
  children: React.ReactNode
  title: string
}

const Section = ({ children, title }: Props) => {
  return (
    <div className="">
      <h2 className="uppercase text-lg font-bold border-b-4 border-cyan-600 text-cyan-600 shadow-sm drop-shadow-sm">
        {title}
      </h2>
      <div className="py-2 "> {children}</div>
    </div>
  )
}

export default Section

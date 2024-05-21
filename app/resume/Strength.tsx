import React from "react"

type Props = {
  title: string
  description: string
  icon: React.ReactNode
}

const Strength = ({ title, description, icon }: Props) => {
  return (
    <div className="flex gap-3 ">
      <div className="flex-grow">{icon}</div>
      <div className="items-center gap-2">
        <h2 className="uppercase font-semibold text-cyan-600">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default Strength

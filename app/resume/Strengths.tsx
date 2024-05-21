import React from "react"
import Strength from "./Strength"
import { TbAnalyzeFilled } from "react-icons/tb"
import { RiTeamFill } from "react-icons/ri"
import { IoMdFlag } from "react-icons/io"

type Props = {
  strengths?: string[]
}

const Strengths = ({ strengths }: Props) => {
  return (
    <div>
      <Strength
        icon={<TbAnalyzeFilled />}
        title={"Problem-solving skills"}
        description={
          "Solved complex coding problems using React and Python resulting in faster application performance."
        }
      />
      <div className="w-full h-1 my-1 bg-gray-200" />

      <Strength
        icon={<RiTeamFill />}
        title={"Team player"}
        description={
          "Collaborated with cross-functional teams to develop and deliver high-quality products."
        }
      />
      <div className="w-full h-1 my-1 bg-gray-200" />

      <Strength
        icon={<IoMdFlag />}
        title={"Attention to detail"}
        description={
          "Ensured code quality and accuracy through rigorous testing and review processes."
        }
      />
    </div>
  )
}

export default Strengths

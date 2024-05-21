import React from "react"
import Skill from "./Skill"

type Props = {
  skills: string[]
}

const Skills = ({ skills }: Props) => {
  console.log(skills)
  return (
    <div>
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Skill key={index} text={skill} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Skills

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

type Props = {
  img: any
  title: string
  description: string[]
  link: string
  stack?: string[]
}

export const Project = (props: Props) => {
  return (
    <div className=" items-center flex-wrap md:flex-nowrap flex my-3 container mx-auto">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className=" h-96 w-full object-cover  md:h-[400px] md:w-[700px] rounded-xl "
        src={props.img}
      />
      <div className="  md:px-10 max-w-6xl mx-auto space-y-4 px-4">
        <h4 className=" text-xl md:text-2xl font-semibold  text-left ">
          {props.title}
        </h4>
        <ul className="text-md text-left md:text-left md:text-lg ">
          {props.description?.map((item, index) => (
            <li className="text-left" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <h4 className=" text-xl md:text-lg font-semibold  text-left ">
          STACK:
        </h4>
        <ul className="text-md text-left md:text-left md:text-lg ">
          {props.stack?.map((item, index) => (
            <li className="text-left" key={index}>
              - {item}
            </li>
          ))}
        </ul>
        {
          // Link to project
          props.link && (
            <Link
              className="text-gray-300 hover:text-blue-600 mt-10"
              href={props.link}>
              View Project
            </Link>
          )
        }
      </div>
    </div>
  )
}

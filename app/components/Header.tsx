"use client"
import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className=" md:sticky md:top-0 flex items-start justify-between max-w-7xl mx-auto p-5 z-40 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center ">
        <SocialIcon
          url="https://www.linkedin.com/in/mohammad-tamim-51819613a/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/maltamimi96"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          fgColor="gray"
          network="email"
          bgColor="transparent"
        />
        <a
          href="email: m.altamimi96@outlook.com"
          className="uppercase hidden md:inline-flex text-sm text-gray-400">
          get in touch
        </a>
      </motion.div>
    </header>
  )
}

export default Header

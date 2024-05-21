import React from "react"
import IconHeader from "./IconHeader"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { TiLocation } from "react-icons/ti"
import { FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <h1 className="text-3xl uppercase font-bold text-cyan-600 drop-shadow-sm">
        Mohammad Altamimi
      </h1>
      <p className=" font-bold uppercase">Full Stack Developer</p>
      <div className=" my-2">
        <section className="flex justify-start gap-4">
          <IconHeader icon={<TiLocation />} title="Sydney, Australia" />

          <IconHeader
            href="tel:+61490688332"
            icon={<FaPhone />}
            title="+61 0490 688 332"
          />
          <IconHeader icon={<MdEmail />} title="m.altamimi96@outlook.com" />
        </section>
        {/* <section className="flex mt-3 gap-4">
          <IconHeader
            size="md"
            href="https://github.com/maltamimi96"
            icon={<FaGithub />}
          />
          <IconHeader
            size="md"
            href="https://www.linkedin.com/in/mohammad-altamimi-2b7b0a1b3/"
            icon={<FaLinkedinIn />}
          />
        </section> */}
      </div>
    </>
  )
}

export default Header

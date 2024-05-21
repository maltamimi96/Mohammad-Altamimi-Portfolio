import { delay } from "framer-motion"
import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircle from "./BackgroundCircle"

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Developer", "Programmer", "Web Designer"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        src="https://lnfvcclkhmgeibvfcmjo.supabase.co/storage/v1/object/sign/assets/profile-removebg-preview.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvcHJvZmlsZS1yZW1vdmViZy1wcmV2aWV3LnBuZyIsImlhdCI6MTcxNjI4MDc1NSwiZXhwIjo0ODM4MzQ0NzU1fQ.VAt89XFzdaa7DJUyZWVcOEh7HNnjRXPBDcpg3BxoOr8&t=2024-05-21T08%3A39%3A13.236Z"
        className="relative rounded-full h-40 w-40 mx-auto object-cover "
        alt="profile picture"
      />
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] md:text-lg">
        Software Developer
      </h2>
      <h1 className="text-5xl lg:text-6xl font-semibold px-10">
        <span>{text}</span>
        <Cursor cursorColor="cyan" />
      </h1>
      <div className="z-20 flex gap-1 flex-wrap items-center justify-center">
        <Link href={"#about"}>
          <button className="heroButton">About</button>
        </Link>
        {/* <Link href={"#experience"}>
          <button className="heroButton">Experience</button>
        </Link> */}
        <Link href={"#skills"}>
          <button className="heroButton">Skills</button>
        </Link>
        <Link href={"#projects"}>
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero

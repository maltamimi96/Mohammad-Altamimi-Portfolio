import React from "react"
import Link from "next/link" // Importing Link from Next.js

type Props = {
  icon: React.ReactNode
  title?: string
  href?: string
  size?: "sm" | "md" | "lg"
}

const IconHeader = ({ size = "sm", icon, href, title }: Props) => {
  const sizeValue = () => {
    if (size === "sm") {
      return "text-sm"
    } else if (size === "md") {
      return "text-xl"
    } else {
      return "text-2xl"
    }
  }

  // Conditionally render the component with or without a link
  return href ? (
    <Link href={href} passHref>
      <div
        className={`flex items-center ${sizeValue()} gap-2 text-gray-600 cursor-pointer`}>
        {icon}
        {title && (
          <h2 className="uppercase font-semibold text-cyan-600">{title}</h2>
        )}
      </div>
    </Link>
  ) : (
    <div className={`flex items-center ${sizeValue()} gap-2 text-gray-600`}>
      {icon}
      {title && (
        <h2 className="uppercase font-semibold text-cyan-600">{title}</h2>
      )}
    </div>
  )
}

export default IconHeader

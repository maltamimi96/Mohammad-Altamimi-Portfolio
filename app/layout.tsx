import type { Metadata } from "next"
import { Kumbh_Sans } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"

const inter = Kumbh_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammad Altamimi Full Stack Developer",
  description: "My portfolio website showcasing my projects and skills.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

"use client"

import Hero from "../components/Hero/Hero"
import About from "../components/About"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"
import Link from "next/link"
export default function Home() {
  return (
    <>
      {/* Header */}
      <section id="hero" className=" snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center h-fit">
        <About />
      </section>
      <section id="skills" className="snap-start scroll-smooth">
        <Skills />
      </section>
      <section id="projects" className="snap-start scroll-smooth">
        <Projects />
      </section>
      <section id="contact" className="snap-start scroll-smooth"></section>
    </>
  )
}

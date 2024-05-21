import React from "react"
import Header from "./Header"
import Section from "./Section"
import Paragraph from "./Paragraph"
import SubHeader from "./SubHeader"
import SmallHeader from "./SmallHeader"
import IconHeader from "./IconHeader"
import { FaCalendar } from "react-icons/fa"
import { skill_list, summary } from "./cv_text"
import Projects from "./Projects"
import Skills from "./Skills"
import Strengths from "./Strengths"

type Props = {}

const page = (props: Props) => {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <Header />

      <div className=" grid grid-cols-4 gap-10">
        <section className="col-span-3 ">
          <Section title="SUMMARY">
            <Paragraph text={summary} />
          </Section>
          <Section title="EXPERIENCE">
            <SubHeader title="Freelance Web Developer" />
            <SmallHeader title="Self Employed | 2022-Present" />
            <ul className="list-disc px-5 pt-2 pb-3 text-sm space-y-2 text-gray-600">
              <li>
                Spearheaded custom web solution development through direct
                collaboration with clients, effectively translating their needs
                into robust and engaging websites.
              </li>
              <li>
                Engineered responsive and user-friendly websites leveraging
                HTML, CSS, and JavaScript, ensuring cross-browser compatibility
                and seamless user experiences.
              </li>
              <li>
                Employed advanced front-end technologies such as React, Next.js,
                Tailwind CSS, and Material-UI to craft dynamic and visually
                compelling web applications.
              </li>
              <li>
                Integrated RESTful APIs to enhance website functionality and
                streamline third-party service incorporation, boosting overall
                system efficiency.
              </li>
              <li>
                Maintained close communication with clients to capture precise
                requirements, offered expert technical advice, and ensured
                timely project delivery within established deadlines.
              </li>
              <li>
                Exhibited exceptional problem-solving abilities and meticulous
                attention to detail, consistently delivering high-quality
                outcomes that exceed client expectations.
              </li>
            </ul>
          </Section>
          <Section title="PROJECTS">
            <Projects />
          </Section>
        </section>
        <section className="col-span-1">
          <Section title="Education">
            <div className="mt-1 mb-2">
              <SubHeader title="Bachelor of information technology " />
              <SmallHeader title="Western Sydney Univeristy" />
              <IconHeader icon={<FaCalendar />} title="2014-2017" />
            </div>
            <div className="mt-1 mb-2">
              <SubHeader title="WEB DEVELOPMENT BOOT CAMP " />
              <SmallHeader title="Coder Academy" />
              <IconHeader icon={<FaCalendar />} title="2021-2022" />
            </div>
          </Section>
          <Section title="Strengths">
            <Strengths />
          </Section>
          <Section title="Skills">
            <Skills skills={skill_list} />
          </Section>
        </section>
      </div>
    </main>
  )
}

export default page

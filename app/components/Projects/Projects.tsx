import React from "react"
import { Project } from "./Project"
import trello from "../../../assets/trello.png"
import Link from "next/link"
type Props = {}

const Projects = (props: Props) => {
  return (
    <>
      <Project
        img={
          "https://lnfvcclkhmgeibvfcmjo.supabase.co/storage/v1/object/sign/assets/barber%201.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvYmFyYmVyIDEucG5nIiwiaWF0IjoxNzE2Mjc5MzUwLCJleHAiOjIwMzE2MzkzNTB9.HORQe-n6XrAsPZilrrYYYU600gJdpiTiURT3_xaFuXI&t=2024-05-21T08%3A15%3A47.718Z"
        }
        description={[
          "Immortal Blades Barber Booking App, built with Next.js for a smooth and efficient scheduling experience. This user-friendly app allows clients to easily browse available time slots, choose their preferred barber, and book appointments with just a few clicks. Barbers can manage their schedules, track appointments, and send notifications from a centralized dashboard. The use of Next.js ensures fast load times and smooth navigation, with a responsive design that works on any device. Real-time updates and secure payment processing make the Immortal Blades Barber Booking App a reliable and convenient tool for all your grooming needs.",
        ]}
        stack={["Next Js 13", "Chart.js", "TailwindCSS"]}
        title="Immortal Blades Booking App"
        link="https://barberbookings.tech/availability"
      />
      <Project
        img={
          "https://lnfvcclkhmgeibvfcmjo.supabase.co/storage/v1/object/sign/assets/trello.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdHJlbGxvLnBuZyIsImlhdCI6MTcxNjI3OTExNywiZXhwIjoyMDMxNjM5MTE3fQ.wYFR-69dmNsEEp6J7MEVMX_fJj9XkoRfYQ8HHDbZvH8&t=2024-05-21T08%3A11%3A55.398Z"
        }
        description={[
          "A Trello clone app built with Next.js offers a robust and efficient project management tool that leverages the power of React and server-side rendering. This application replicates the core functionalities of Trello, providing users with the ability to create, manage, and organize tasks through an intuitive drag-and-drop interface. Utilizing Next.js, the app ensures fast loading times and seamless navigation, enhancing the user experience with its responsive design. Features such as task boards, lists, cards, and real-time updates are implemented using modern JavaScript libraries and frameworks, ensuring the app is both scalable and maintainable. Additionally, the use of Next.js' API routes allows for efficient handling of backend operations, making the Trello clone not only visually appealing but also performant and reliable for all project management needs.",
        ]}
        stack={["Next Js 13", "Chart.js", "TailwindCSS"]}
        title="Trello Clone"
        link=""
      />

      <Project
        img={
          "https://lnfvcclkhmgeibvfcmjo.supabase.co/storage/v1/object/sign/assets/trello.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdHJlbGxvLnBuZyIsImlhdCI6MTcxNjI3OTExNywiZXhwIjoyMDMxNjM5MTE3fQ.wYFR-69dmNsEEp6J7MEVMX_fJj9XkoRfYQ8HHDbZvH8&t=2024-05-21T08%3A11%3A55.398Z"
        }
        description={[
          "A Trello clone app built with Next.js offers a robust and efficient project management tool that leverages the power of React and server-side rendering. This application replicates the core functionalities of Trello, providing users with the ability to create, manage, and organize tasks through an intuitive drag-and-drop interface. Utilizing Next.js, the app ensures fast loading times and seamless navigation, enhancing the user experience with its responsive design. Features such as task boards, lists, cards, and real-time updates are implemented using modern JavaScript libraries and frameworks, ensuring the app is both scalable and maintainable. Additionally, the use of Next.js' API routes allows for efficient handling of backend operations, making the Trello clone not only visually appealing but also performant and reliable for all project management needs.",
        ]}
        stack={["Next Js 13", "Chart.js", "TailwindCSS"]}
        title="Trello Clone"
        link=""
      />
      <Link href="/projects">See More</Link>
    </>
  )
}

export default Projects

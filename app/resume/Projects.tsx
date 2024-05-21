import React from "react"

type Props = {}

const Projects = (props: Props) => {
  return (
    <div>
      <div className="">
        <ul className=" ">
          <li>
            <strong className="text-sm">
              Customer Management and Invoicing Web App:
            </strong>
            <ul className="list-disc px-5 pt-2 pb-3 text-sm space-y-2 text-gray-600">
              <li>
                Developed a responsive web application using React for managing
                customers, tracking income, and generating invoices.
              </li>
              <li>
                Engineered CRUD functionalities for adding, editing, and
                deleting customer records.
              </li>
              <li>
                Utilized Firebase for seamless real-time data synchronization
                and secure user authentication.
              </li>
              <li>
                Created an automated invoice generator that allows for the
                creation and dispatch of invoices directly to customers via
                email.
              </li>
            </ul>
          </li>
          <li>
            <strong className="text-sm">Trello Clone App:</strong>
            <ul className="list-disc px-5 pt-2 pb-3 text-sm space-y-2 text-gray-600">
              <li>
                Built a project management tool inspired by Trello using Next.js
                13, leveraging the framework’s server-side rendering
                capabilities for enhanced performance.
              </li>
              <li>
                Implemented features to create boards, lists, and cards with a
                user-friendly drag-and-drop interface, enabling effective task
                organization and prioritization.
              </li>
            </ul>
          </li>

          <li>
            <strong className="text-sm">Barber Bookings App:</strong>
            <ul className="list-disc px-5 pt-2 pb-3 text-sm space-y-2 text-gray-600">
              <li>
                Engineered a dynamic booking app for barbershops using Next.js
                13, focusing on ease of appointment scheduling and management.
              </li>
              <li>
                Integrated a calendar view for clients to select and book
                appointments, coupled with real-time availability updates.
              </li>
              <li>
                Designed a clean and modern user interface with Tailwind CSS,
                enhancing usability and client engagement.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Projects

import React from "react"
import "./style.scss"

type Props = {
  title: string
  description: string
  href: string
}

const ProjectButton = ({title, description, href}: Props) => {
  return (
    <li className="project-button">
      <a href={href}>{title}</a>
    </li>
  )
}

export default ProjectButton

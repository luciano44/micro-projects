"use client"
import React, {useState} from "react"
import "./style.scss"
import ProjectDescription from "../project-description/projectDescription"

type Props = {
  title: string
  description: string
  href: string
}

const ProjectButton = ({title, description, href}: Props) => {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <li
      className="project-button"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <a href={href}>{title}</a>
      {showDescription && <ProjectDescription description={description} />}
    </li>
  )
}

export default ProjectButton

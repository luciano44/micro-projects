import React from "react"
import "./style.scss"

type Props = {
  title: String
  description: String
}

const ProjectButton = ({title, description}: Props) => {
  return (
    <li className="project-button">
      <a href="#">{title}</a>
    </li>
  )
}

export default ProjectButton

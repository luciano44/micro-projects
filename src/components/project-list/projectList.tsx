import React from "react"
import "./style.scss"
import ProjectButton from "../project-button/projectButton"

const ProjectList = () => {
  return (
    <div className="project-list">
      <h2>Projects</h2>
      <ul>
        <ProjectButton
          title="Throttle"
          description="Throttle is bla bla lorem ipsum dolor siamet"
          href="throttle"
        />
      </ul>
    </div>
  )
}

export default ProjectList

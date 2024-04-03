import React from "react"
import "./style.scss"
import ProjectButton from "../project-button/projectButton"

const ProjectList = () => {
  const EmptyArray = Array.from({length: 250})

  return (
    <div className="project-list">
      <h1>Projects</h1>
      <ul>
        {EmptyArray.map((arr: any, i) => (
          <ProjectButton
            key={i}
            title="lorem ips"
            description="Description goes exactly here"
          />
        ))}
      </ul>
    </div>
  )
}

export default ProjectList
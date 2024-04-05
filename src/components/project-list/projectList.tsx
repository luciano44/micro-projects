import React from "react"
import "./style.scss"
import ProjectButton from "../project-button/projectButton"

const ProjectList = () => {
  return (
    <div className="project-list">
      <h2>Projects</h2>
      <ul>
        <ProjectButton
          title="Debouncing"
          description="Debouncing in programming is a method to ensure that only one stable signal is recognized from a noisy input, like a button press, by adding a delay or filter to ignore rapid fluctuations."
          href="debouncing"
        />
      </ul>
    </div>
  )
}

export default ProjectList

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
        <ProjectButton
          title="Throttling"
          description="Throttling in programming limits how often a function can be called within a specific timeframe. It's used to control the rate of execution, often to prevent performance issues or excessive resource usage."
          href="throttling"
        />
      </ul>
    </div>
  )
}

export default ProjectList

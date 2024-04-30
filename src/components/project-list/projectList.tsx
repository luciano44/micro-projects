import React from "react"
import "./style.scss"
import ProjectButton from "../project-button/projectButton"

const ProjectList = () => {
  const arr = Array.from({length: 250})

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
        <ProjectButton
          title="Stripe Wave"
          description="Wave mouse hover effect using stripes."
          href="stripe-wave"
        />
        <ProjectButton
          title="Cards Animation"
          description="Populate cards into the page with an animation"
          href="cards-animation"
        />
        {/* {arr.map((x) => (
          <ProjectButton
            title="Throttling"
            description="Throttling in programming limits how often a function can be called within a specific timeframe. It's used to control the rate of execution, often to prevent performance issues or excessive resource usage."
            href="throttling"
          />
        ))} */}
      </ul>
    </div>
  )
}

export default ProjectList

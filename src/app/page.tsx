"use client"
import React from "react"
import Header from "@/components/header/header"
import ProjectList from "@/components/project-list/projectList"

const HomePage = () => {
  const h1Text =
    "Micro Projects hub, where I bring to life every new idea or tech I learn! Dive in and explore my journey of constant discovery."

  const h1TextArray = Array.from(h1Text)

  function addAnimation(el: any) {
    el.classList.remove("glow-anim")

    setTimeout(() => {
      el.classList.add("glow-anim")
    }, 25)
  }

  return (
    <>
      <Header />
      <h1>
        {h1TextArray.map((letter, i) => (
          <span
            key={i}
            className={letter === " " ? "disabled" : ""}
            onMouseEnter={(e) => {
              addAnimation(e.target)
            }}
          >
            {letter || "&nbsp;"}
          </span>
        ))}
      </h1>
      <main>
        <ProjectList />
      </main>
    </>
  )
}

export default HomePage

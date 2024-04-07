"use client"
import React, {useEffect, useRef} from "react"
import "./style.scss"

type Props = {
  description: string
}

const ProjectDescription = ({description}: Props) => {
  const projectDescriptionRef = useRef<HTMLDivElement>(null)

  const handleProjectDescription = (e: MouseEvent) => {
    let x = e.pageX
    let y = e.pageY

    // get description element height
    const descElHeight = projectDescriptionRef.current
      ? projectDescriptionRef.current?.clientHeight + 20
      : 0

    // prevent description element from exceeding left & right page border
    x = x < 150 ? 150 : x
    x =
      x > window.document.body.clientWidth - 160
        ? window.document.body.clientWidth - 160
        : x

    // prevent description element from exceeding bottom page border
    y =
      y > window.document.body.clientHeight - descElHeight
        ? window.document.body.clientHeight - descElHeight
        : y

    const xPx = `${x - 150}px`
    const yPx = `${y + 10}px`

    if (projectDescriptionRef.current) {
      projectDescriptionRef.current.style.left = xPx
      projectDescriptionRef.current.style.top = yPx
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", (e) => handleProjectDescription(e))

    return window.removeEventListener("mousemove", (e) =>
      handleProjectDescription(e)
    )
  }, [])

  return (
    <div ref={projectDescriptionRef} className="project-description">
      <p>{description}</p>
    </div>
  )
}

export default ProjectDescription

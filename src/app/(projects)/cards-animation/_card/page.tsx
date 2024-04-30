"use client"
import React, {useEffect, useState} from "react"
// import "./style.scss"

type Props = {
  delay: number
  content: string
}

const Card = ({delay, content}: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, delay)
  }, [])

  if (isLoading) return

  return <div className="card">{content}</div>
}

export default Card

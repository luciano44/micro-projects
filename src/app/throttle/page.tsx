"use client"
import React, {useEffect, useState} from "react"
import "./style.scss"

const ThrottlePage = () => {
  const [text, setText] = useState("")
  const [shouldWait, setShouldWait] = useState(false)
  const [waitingArgs, setWaitingArgs] = useState("")

  function inputHandler(v: string) {
    setText(v)
  }

  function throttle(fn: (str: string) => void, delay = 1000) {
    const timeoutFunc = () => {
      if (waitingArgs == "") {
        setShouldWait(false)
      } else {
        fn(waitingArgs)
        setWaitingArgs("")
        console.log("fn called")
        setTimeout(timeoutFunc, delay)
      }
    }

    return (args: string) => {
      if (shouldWait) {
        setWaitingArgs(args)
        return
      }

      fn(args)
      setShouldWait(true)

      setTimeout(timeoutFunc, delay)
    }
  }

  const throttleInputHandler = throttle(inputHandler)

  return (
    <div className="throttle-page">
      <h1>Throttle</h1>
      <input
        type="text"
        onChange={(e) => throttleInputHandler(e.target.value)}
      />
      <p>{text}</p>
    </div>
  )
}

export default ThrottlePage

"use client"
import React, {useRef, useState} from "react"
import "./style.scss"

const ThrottlingPage = () => {
  const pRef = useRef<HTMLParagraphElement>(null)
  const [delay, setDelay] = useState(1000)

  function inputHandler(str: string) {
    pRef.current!.textContent = str
  }

  function handleDelay(delay: string) {
    setDelay(parseInt(delay))
  }

  function throttle(fn: (args: string) => void, d = delay) {
    let shouldWait = false
    let waitingArgs: string | null = null

    const f = (args: string): any => {
      if (shouldWait) {
        waitingArgs = args
        return
      }

      fn(args)
      shouldWait = true

      setTimeout(() => {
        shouldWait = false
        if (typeof waitingArgs == "string") {
          const wArgs = waitingArgs
          waitingArgs = null
          f(wArgs)
        }
      }, d)
    }

    return f
  }

  const throttledInputHandler = throttle(inputHandler)

  return (
    <div className="throttling-page">
      <h1>Throttling</h1>
      <input
        type="number"
        onInput={(e) => handleDelay((e.target as HTMLInputElement).value)}
        placeholder="delay (default: 500ms)"
      />
      <input
        type="text"
        maxLength={5_000}
        onInput={(e) =>
          throttledInputHandler((e.target as HTMLInputElement).value)
        }
        placeholder="input"
      />
      <p className="label" data-label="example" ref={pRef}></p>
    </div>
  )
}

export default ThrottlingPage

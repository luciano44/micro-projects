"use client"
import React, {useRef, useState} from "react"
import "./style.scss"

const DebouncingPage = () => {
  const pRef = useRef<HTMLParagraphElement>(null)
  const [delay, setDelay] = useState(500)

  function inputHandler(str: string) {
    pRef.current!.textContent = str
    console.log(1)
  }

  function handleDelay(delay: string) {
    setDelay(parseInt(delay))
  }

  function debounce(fn: (args: string) => void, d = delay) {
    let timeout: ReturnType<typeof setTimeout>

    return (args: string) => {
      if (timeout) clearInterval(timeout)
      timeout = setTimeout(() => {
        fn(args)
      }, d)
    }
  }

  const debouncedInputHandler = debounce(inputHandler)

  return (
    <div className="debouncing-page">
      <h1>Debouncing</h1>
      <input
        type="number"
        onInput={(e) => handleDelay((e.target as HTMLInputElement).value)}
        placeholder="delay (default: 500ms)"
      />
      <input
        type="text"
        maxLength={5_000}
        onInput={(e) =>
          debouncedInputHandler((e.target as HTMLInputElement).value)
        }
        placeholder="input"
      />
      <p className="label" data-label="example" ref={pRef}></p>
    </div>
  )
}

export default DebouncingPage

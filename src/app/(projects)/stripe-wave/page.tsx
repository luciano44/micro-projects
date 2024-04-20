"use client"
import React, {useState} from "react"
import "./style.scss"

const StripeWave = () => {
  const [stripeQty, setStripeQty] = useState<number>(50)

  // const handleMouseEnter = (i: number) => {
  //   const el = document.getElementById(i.toString())
  //   const elBefore = document.getElementById((i - 1).toString())
  //   const elAfter = document.getElementById((i + 1).toString())

  //   el?.classList.add("grow-3")
  //   elBefore?.classList.add("grow-2")
  //   elAfter?.classList.add("grow-2")

  //   console.clear()
  //   console.log({el, elBefore, elAfter})
  // }

  const handleMouseEnter = (i: number) => {
    const el = document.getElementById(i.toString())
    const elBefore1 = document.getElementById((i - 1).toString())
    const elBefore2 = document.getElementById((i - 2).toString())
    const elAfter1 = document.getElementById((i + 1).toString())
    const elAfter2 = document.getElementById((i + 2).toString())

    el?.classList.add("grow-3")
    elBefore1?.classList.add("grow-2")
    elBefore2?.classList.add("grow-1")
    elAfter1?.classList.add("grow-2")
    elAfter2?.classList.add("grow-1")

    // console.clear()
    // console.log({el, elBefore, elAfter})
  }

  const handleMouseLeave = (i: number) => {
    const el = document.getElementById(i.toString())
    const elBefore1 = document.getElementById((i - 1).toString())
    const elBefore2 = document.getElementById((i - 2).toString())
    const elAfter1 = document.getElementById((i + 1).toString())
    const elAfter2 = document.getElementById((i + 2).toString())

    el?.classList.remove("grow-3")
    elBefore1?.classList.remove("grow-2")
    elBefore2?.classList.remove("grow-1")
    elAfter1?.classList.remove("grow-2")
    elAfter2?.classList.remove("grow-1")

    // console.clear()
    // console.log({el, elBefore, elAfter})
  }

  return (
    <div className="stripe-wave-page">
      <div className="wave">
        {Array.from({length: stripeQty}).map((item, i) => (
          <div
            key={i}
            className="stripe"
            id={i.toString()}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <div></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StripeWave

import Link from "next/link"
import React from "react"
import "./style.scss"
import {PiKeyReturnFill} from "react-icons/pi"

const goBackHomeButton = () => {
  return (
    <div className="go-back-home-button">
      <Link href="/">
        <PiKeyReturnFill />
        <span>Home</span>
      </Link>
    </div>
  )
}

export default goBackHomeButton

import Link from "next/link"
import React from "react"

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page not found</h1>
      <Link href="/">Go home</Link>
    </div>
  )
}

export default NotFound

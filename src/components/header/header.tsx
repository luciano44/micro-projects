import React from "react"
import "./style.scss"

import MainLogo from "../../assets/img/main-logo.svg"
import MicroProjectsText from "../../assets/img/micro-projects-text-logo.svg"
import RoundLogo from "../../assets/img/round-logo.svg"

const Header = () => {
  return (
    <header className="page-header">
      <div className="micro-projects-logo">
        <img src={MicroProjectsText.src} alt="Micro Projects" />
      </div>
      <div className="logos-wrapper">
        <img src={RoundLogo.src} alt="Round Logo" className="round-logo" />
        <img src={MainLogo.src} alt="Main Logo" className="main-logo" />
      </div>
    </header>
  )
}

export default Header

"use client"
import React from "react"
import ProjectList from "@/components/project-list/projectList"
import Header from "@/components/header/header"
import Link from "next/link"

//import icons
import {FaXTwitter} from "react-icons/fa6"
import {SiLinkedin} from "react-icons/si"
import {FaGithub} from "react-icons/fa"
import LRLogo from "../assets/img/lr-logo.svg"

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
            {letter}
          </span>
        ))}
      </h1>
      <main>
        <ProjectList />
      </main>
      <footer className="home-page-footer">
        <div className="lr-logo">
          <Link href={"https://luciano44.github.io/"}>
            <img src={LRLogo.src} alt="LR Logo" />
          </Link>
        </div>
        <div className="social-medias">
          <Link href={"https://github.com/luciano44"}>
            <FaGithub />
          </Link>
          <Link href={"https://www.linkedin.com/in/luciano-ar/"}>
            <SiLinkedin />
          </Link>
          <Link href={"https://twitter.com/lucianoasri"}>
            <FaXTwitter />
          </Link>
        </div>
      </footer>
    </>
  )
}

export default HomePage

"use client"
import React, {useState} from "react"
import "./style.scss"
import Card from "./_card/page"
import {LuPlusSquare, LuMinusSquare} from "react-icons/lu"

const CardsAnimationPage = () => {
  const [cardQty, setCardQty] = useState(50)
  const [delay, setDelay] = useState(50)

  function reloadCards(newQty: number) {
    const qty = newQty ?? cardQty
    setCardQty(0)

    setTimeout(() => {
      setCardQty(qty)
    }, 0)
  }

  function changeCardQty(qty: number) {
    qty = qty < 1 ? 1 : qty
    setCardQty(qty)
    reloadCards(qty)
  }

  function changeCardDelay(newDelay: number) {
    newDelay = newDelay < 0 ? 0 : newDelay
    setDelay(newDelay)
    reloadCards(cardQty)
  }

  function reset() {
    setCardQty(50)
    setDelay(50)
    reloadCards(50)
  }

  return (
    <div className="cards-animation-page">
      <h1>Cards Animation</h1>
      <div className="info">
        <span className="card-qty-info">
          Cards: <span>{cardQty}</span>
        </span>
        <span className="delay-info">
          Delay: <span>{delay}</span> <small>{`(Card Number x Delay)`}</small>
        </span>
      </div>
      <div className="inputs">
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
        <button onClick={() => changeCardQty(cardQty + 1)}>
          <LuPlusSquare /> Card
        </button>
        <button onClick={() => changeCardQty(cardQty - 1)}>
          <LuMinusSquare /> Card
        </button>
        <button onClick={() => changeCardDelay(delay + 2)}>
          <LuPlusSquare /> Delay
        </button>
        <button onClick={() => changeCardDelay(delay - 2)}>
          <LuMinusSquare /> Delay
        </button>
      </div>
      <div className="container">
        {Array.from({length: cardQty}).map((_, index) => (
          <Card key={index} delay={index * delay} content={`${++index}`} />
        ))}
      </div>
    </div>
  )
}

export default CardsAnimationPage

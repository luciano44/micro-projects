"use client"
import React, {useState} from "react"
import "./style.scss"
import Card from "./_card/page"

const CardsAnimationPage = () => {
  const [cardQty, setCardQty] = useState(50)
  const [delay, setDelay] = useState(50)

  return (
    <div className="cards-animation-page">
      <h1>Cards Animation</h1>
      <div className="inputs">
        <input
          type="number"
          className="card-qty"
          placeholder="Card Quantity"
          min={1}
          max={1000}
          defaultValue={50}
          onChange={(e) => setCardQty(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="card-delay"
          placeholder="Card Delay"
          min={1}
          defaultValue={50}
          max={5000}
          onChange={(e) => setDelay(parseInt(e.target.value))}
        />
      </div>
      <div className="container">
        {Array.from({length: cardQty}).map((_, index) => (
          <Card key={index} delay={0 + index * delay} content={`${++index}`} />
        ))}
      </div>
    </div>
  )
}

export default CardsAnimationPage

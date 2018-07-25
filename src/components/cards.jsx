import React from "react"
import cardStyles from "./cards.module.styl"

export default ({cards}) => {
  return <section className={cardStyles.cards}>
    {cards}
  </section>
}

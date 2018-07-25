import React from "react"
import Title from "./title.jsx"
import Legend from "./legend.jsx"

import cardStyles from "./card.module.scss"

export default (props)=>{
  const {title,img,symbols,content}=props.data;
  return <article className={cardStyles.card}>
  <header>
    <Title title={title} img={img}></Title>
    <Legend symbols={symbols}></Legend>
  </header>
  <section className={cardStyles.content}>
  {content}
  </section>
  </article>;
}

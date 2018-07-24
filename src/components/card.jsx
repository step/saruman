import React from "react"
import Title from "./title.jsx"
import Legend from "./legend.jsx"

export default (props)=>{
  const {title,img,symbols,content}=props.data;
  return <article className="card">
  <header>
    <Title title={title} img={img}></Title>
    <Legend symbols={symbols}></Legend>
  </header>
  <section className="content">
  {content}
  </section>
  </article>;
}

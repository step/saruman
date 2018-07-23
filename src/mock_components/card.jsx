import React from "react"
import Title from "./title.jsx"
import Legend from "./legend.jsx"

export default (props)=>{
  const {author,img,symbols,content}=props.data;
  return <article className="card">
  <header>
    <Title title={author} img={img}></Title>
    <Legend symbols={symbols}></Legend>
  </header>
  <section className="content">
  </section>
  </article>;
}

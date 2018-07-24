import React from "react"
import Symbol from "./symbol.jsx"

export default (props)=>{
  const {symbols}=props;
  const keys=symbols.map((s)=><Symbol icon={s.icon} text={s.text}></Symbol>)
  return <section className="legend">{keys}</section>;
}

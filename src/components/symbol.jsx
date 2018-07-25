import React from "react"
import {key} from "./symbol.module.styl"

export default (props)=>{
  const {icon,text}=props;

  return <div className={key}>
  <span>{icon}</span>
  <span>{text}</span>
  </div>
}

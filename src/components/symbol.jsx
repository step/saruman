import React from "react"

export default (props)=>{
  const {icon,text}=props;

  return <div className="key">
  {icon}
  {text}
  </div>
}

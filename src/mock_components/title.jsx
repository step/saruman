import React from "react";

export default (props)=>{
  const {title,img}=props;
  return <figure className="title">
  <img src={img}/>
  <figcaption>{title}</figcaption>
  </figure>
}

import React from "react";

export default (props)=>{
  const {title,img}=props;
  return <figure className="title">
  <img src={img} alt={title}/>
  <figcaption>{title}</figcaption>
  </figure>
}

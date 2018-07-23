import React from "react"
import Card from "../../mock_components/card.jsx"
const data = [
  {
    author: "jayanth",
    img:"https://avatars3.githubusercontent.com/u/131062?v=4",
    symbols:[
      {icon:<i className="fas fa-project-diagram"></i>,text:"20"}
    ]
  }
];
export default (props) => {
  const cards = data.map((d)=><Card data={d}></Card>);
  return <section className="cards">
    {cards}
  </section>
}

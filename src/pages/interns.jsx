import {graphql} from "gatsby"
import React from "react"
import Card from "../components/card.jsx"
import summarise from "../lib/summarise_intern.js"
import _ from "lodash"

const toSymbol=(summary,key)=>{
  return {icon:<i className="fas fa-upload"></i>, text: summary[key]}
}

const asCard = (internSummary) => {
  const {intern,
    avatar,
    lastCommitPerProject} = internSummary;

  const cardData = {title: intern, img: avatar, content: "hello"};
  const keys=["numberOfPushes","numberOfProjects"];
  cardData.symbols = _.map(keys,(key)=>toSymbol(internSummary,key));
  return <Card data={cardData}></Card>
}

export default (props) => {
  const {allMongodbSauronResults: {edges}} = props.data;
  const byIntern=summarise(edges);
  const cards=byIntern.map(asCard);
  return <section className="cards">
    {cards}
  </section>
}

export const pageQuery = graphql`
query Interns {
  allMongodbSauronResults(sort: {fields: [commit___timestamp],order:DESC}) {
    edges {
      node {
        author {
          username
        }
        project {
          name
        }
        commit {
          id
          timestamp(fromNow:true)
        }
      }
    }
  }
}
`;

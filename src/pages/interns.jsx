import {graphql} from "gatsby"
import React from "react"
import Card from "../components/card.jsx"
import Cards from "../components/cards.jsx"
import InternTable from "../components/internTable.jsx"
import summarise from "../lib/summarise_intern.js"
import icons from "../components/icons.jsx"
import _ from "lodash"


const toSymbol=(summary,key)=>{
  return {icon:icons[key], text: summary[key]}
}

const asCard = (internSummary) => {
  const {intern,
    avatar,
    lastCommitPerProject} = internSummary;

  const cardData = {title: intern, img: avatar};
  const keys=["numberOfPushes","numberOfProjects"];
  cardData.symbols = _.map(keys,(key)=>toSymbol(internSummary,key));
  cardData.content = <InternTable projects={lastCommitPerProject}></InternTable>
  return <Card data={cardData}></Card>
}

export default (props) => {
  const {allMongodbSauronResults: {edges}} = props.data;
  const byIntern=summarise(edges);
  const cards=byIntern.map(asCard);
  return <Cards cards={cards}></Cards>
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

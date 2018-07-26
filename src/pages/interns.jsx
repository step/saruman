import {graphql} from "gatsby"
import React from "react"
import Card from "../components/card.jsx"
import Cards from "../components/cards.jsx"
import Table from "../components/custom_table.jsx"
import summarise from "../lib/summarise_intern.js"
import icons from "../components/icons.jsx"
import _ from "lodash"


const toSymbol=(summary,key)=>{
  return {icon:icons[key], text: summary[key]}
}

const createTable=(rows)=>{
  const headers=[
    {key:"name", header:"project"},
    {key:"timestamp", header:"last committed"}
  ];
  return <Table rows={rows} headers={headers}></Table>
}

const asCard = (internSummary) => {
  const {intern,
    avatar,
    lastCommitPerProject} = internSummary;

  const cardData = {title: intern, img: avatar};
  const keys=["numberOfPushes","numberOfProjects"];
  cardData.symbols = _.map(keys,(key)=>toSymbol(internSummary,key));
  cardData.content = createTable(lastCommitPerProject,["name","timestamp"])
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
          username {
            id
            image
          }
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

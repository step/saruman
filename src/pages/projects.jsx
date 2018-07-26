import {graphql} from "gatsby"
import React from "react"
import summarise from "../lib/summarise_project.js"
import Table from "../components/custom_table.jsx"
import Card from "../components/card.jsx"
import Cards from "../components/cards.jsx"
import icons from "../components/icons.jsx"
import _ from "lodash"

const toSymbol=(summary,key)=>{
  return {icon:icons[key], text: summary[key]}
}

const createTable=(rows)=>{
  const headers=[
    {key:"name", header:"intern"},
    {key:"timestamp", header:"last committed"}
  ];
  return <Table rows={rows} headers={headers}></Table>
}

const asCard = (projectSummary) => {
  const {project,
    avatar,
    lastCommitPerIntern} = projectSummary;

  const cardData = {title: project, img: avatar};
  const keys=["numberOfPushes","numberOfInterns"];
  cardData.symbols = _.map(keys,(key)=>toSymbol(projectSummary,key));
  cardData.content = createTable(lastCommitPerIntern);
  return <Card data={cardData}></Card>
}

export default (props) => {
  const {allMongodbSauronResults: {edges}} = props.data;
  const byProject=summarise(edges);
  const cards=byProject.map(asCard);
  return <Cards cards={cards}></Cards>
}

export const pageQuery = graphql`
query Projects {
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

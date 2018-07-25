import {graphql} from "gatsby"
import React from "react"
import summarise from "../lib/summarise_project.js"
import InternTable from "../components/internTable.jsx"
import Card from "../components/card.jsx"
import Cards from "../components/cards.jsx"
import icons from "../components/icons.jsx"
import _ from "lodash"

const toSymbol=(summary,key)=>{
  return {icon:icons[key], text: summary[key]}
}

const asCard = (projectSummary) => {
  const {project,
    avatar,
    lastCommitPerIntern} = projectSummary;

  const cardData = {title: project, img: avatar};
  const keys=["numberOfPushes","numberOfInterns"];
  cardData.symbols = _.map(keys,(key)=>toSymbol(projectSummary,key));
  cardData.content = <InternTable projects={lastCommitPerIntern} numberOfRows={5}></InternTable>
  return <Card data={cardData}></Card>
}

export default (props) => {
  const {allMongodbSauronResults: {edges}} = props.data;
  const byProject=summarise(edges);
  console.log(byProject);
  const cards=byProject.map(asCard);
  return <Cards cards={cards}></Cards>
}

export const pageQuery = graphql`
query Projects {
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

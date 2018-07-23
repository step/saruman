import React from "react";
import {graphql} from "gatsby";
import _ from "lodash";
import InternSummary from "../components/intern_summary.jsx";

export default ({data:{allMongodbSauronResults: {edges}}})=>{
  let filtered=_.filter(edges,(edge)=>edge.node.author!=null);
  let byAuthors=_.groupBy(filtered,(edge)=>edge.node.author.username);
  let listItems=_.map(byAuthors,(info,author)=><InternSummary intern={author} info={info}></InternSummary>)
  return <div>{listItems}</div>;
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
          timestamp(fromNow:true)
        }
      }
    }
  }
}
`;

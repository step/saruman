import React from "react";
import {graphql} from "gatsby";
import _ from "lodash";

export default ({data:{allMongodbSauronResults: {edges}}})=>{
  let byProjects=_.groupBy(edges,(edge)=>{
    return edge.node.project?edge.node.project.name:"unknown";
  });
  let listItems=_.map(byProjects,(info,project)=><li>{project}</li>)
  return <div><ul>{listItems}</ul></div>;
}

export const pageQuery = graphql`
query Projects {
  allMongodbSauronResults {
    edges {
      node {
        project {
          name
        }
      }
    }
  }
}
`;

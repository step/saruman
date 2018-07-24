import React from "react"

const createRow = (project) => {
  return <tr>
  <td>{project.name}</td>
  <td>{project.timestamp}</td>
  </tr>

}

export default (props) => {
  const projectRows = props.projects.map(createRow)
  return <table><tbody>{projectRows}</tbody></table>
}

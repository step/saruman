import React from "react"

const createRow = (project) => {
  return <tr>
  <td>{project.name}</td>
  <td>{project.timestamp}</td>
  </tr>
}

const createHeaderRow = () => {
  return <thead>
    <tr>
      <th>intern</th>
      <th>last committed</th>
    </tr>
  </thead>
}

export default (props) => {
  const numberOfRows=props.numberOfRows || 3;
  const rows=props.projects.slice(0,numberOfRows);
  const projectRows = rows.map(createRow)
  return <table>{createHeaderRow()}<tbody>{projectRows}</tbody></table>
}

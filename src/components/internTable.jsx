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
      <th>project</th>
      <th>last committed</th>
    </tr>
  </thead>
}

export default (props) => {
  const projectRows = props.projects.map(createRow)
  return <table>{createHeaderRow()}<tbody>{projectRows}</tbody></table>
}

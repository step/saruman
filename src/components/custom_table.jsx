import React from "react"

const createRow = (row,headers) => {
  let cols=headers.map((header)=><td>{row[header.key]}</td>)
  return <tr>{cols}</tr>
}

const createHeader = (headers) => {
  let cols=headers.map((header)=><th>{header.header}</th>)
  return <thead><tr>{cols}</tr></thead>
}

export default (props) => {
  const {rows,headers} = props;
  console.log(rows);
  const tableRows = rows.map((row)=>createRow(row,headers));
  const tableHeaders = createHeader(headers);

  return <table>{tableHeaders}<tbody>{tableRows}</tbody></table>
}

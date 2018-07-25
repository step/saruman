import React from "react"
import Table from "../components/custom_table.jsx"

const data=[
  {C1:"red",C2:"yellow",C3:"foo"},
  {C1:"black",C2:"green",C3:"bar"}
]
export default () => {
  const headers = [
    {key:"C1",header:"color 1"},
    {key:"C2",header:"color 2"}
  ];
  return <Table rows={data} headers={headers} limit={3}></Table>
}

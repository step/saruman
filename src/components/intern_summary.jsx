import React, {Component} from "react";
import style from "./summary.module.css";

class InternSummary extends Component {
  latestCommit() {
    return this.props.info[0];
  }
  render() {
    let numberOfPushes=this.props.info.length;
    let {node: {commit: {timestamp}, project: {name}}}=this.latestCommit();
    return <div className={style.foo}>
    <p>{this.props.intern} has pushed <span>{numberOfPushes}</span> times.</p>
    <p>Last pushed to {name} {timestamp}</p>
    </div>;
  }
}

export default InternSummary;

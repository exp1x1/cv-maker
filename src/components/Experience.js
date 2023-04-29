import { Component } from "react";

export class Experience extends Component {
  render() {
    const { title, compName, startDate, endDate, expSummary } =
      this.props.data;

    return (
      <div className="experience">
        <h2>{title}</h2>
        <span>{compName}</span>
        <p>
          <span>{startDate}</span>
          to
          <span>{endDate}</span>
        </p>
        <p>{expSummary}</p>
      </div>
    );
  }
}

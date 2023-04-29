import { Component } from "react";

export class Education extends Component {
  render() {
    const { degName, uniName, compYear } = this.props.data;
    return (
      <div className="education">
        <h2>{degName}</h2>
        <span>{uniName}</span>
        <span>{compYear}</span>
      </div>
    );
  }
}

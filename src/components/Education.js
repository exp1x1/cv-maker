import { Component } from "react";

export class Education extends Component {
  render() {
    const { degName, uniName, compYear } = this.props.data;
    return (
      <div className="education">
        <h2>{degName}</h2>
        <p>
          <span>{uniName}</span> <span>-</span> <span>{compYear}</span>
        </p>
      </div>
    );
  }
}

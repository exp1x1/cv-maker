import React, { Component } from "react";

export class EducationInput extends Component {
  render() {
    return (
      <div id={this.props.ids} onChange={this.props.funcUpdate}>
        <input
          typeof="text"
          className="degName"
          placeholder="Education Name"
        ></input>
        <input
          type="text"
          className="uniName"
          placeholder="Institution Name"
        ></input>
        <input
          type="number"
          placeholder="Completed Year"
          className="compYear"
        ></input>
        <button onClick={this.props.funcD}>Remove Education</button>
      </div>
    );
  }
}

import React, { Component } from "react";

export class EducationInput extends Component {
  render() {
    return (
      <div
        id={this.props.ids}
        onChange={this.props.funcUpdate}
        className="eduForm"
      >
        <label>
          Education
          <input
            typeof="text"
            // data-alt-id="degInputName"
            className="degName"
            placeholder="Education Name"
          ></input>
        </label>
        <label>
          Institution
          <input
            type="text"
            // data-alt-id="uniInputName"
            className="uniName"
            placeholder="Institution Name"
          ></input>
        </label>
        <label>
          Completed Year
          <input
            type="number"
            // data-alt-id="compInputYear"
            placeholder="Completed Year"
            className="compYear"
          ></input>
        </label>
        <button className="eduRemoveBtn" onClick={this.props.funcD}>
          Remove Education
        </button>
      </div>
    );
  }
}

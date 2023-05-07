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
            data-ids={this.props.ids}
            className="degName"
            placeholder="Education Name"
          ></input>
        </label>
        <label>
          Institution
          <input
            type="text"
            data-ids={this.props.ids}
            className="uniName"
            placeholder="Institution Name"
          ></input>
        </label>
        <label>
          Completed Year
          <input
            data-ids={this.props.ids}
            type="number"
            placeholder="Completed Year"
            className="compYear"
          ></input>
        </label>
        <button
          className="eduRemoveBtn"
          data-ids={this.props.ids}
          onClick={this.props.funcD}
        >
          Remove Education
        </button>
      </div>
    );
  }
}

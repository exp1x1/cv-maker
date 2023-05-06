import { Component } from "react";

export class ExperienceInput extends Component {
  render() {
    return (
      <div
        id={this.props.ids}
        onChange={this.props.funcUpdate}
        className="expForm"
      >
        <label>
          Job Title
          <input
            type="text"
            className="jobTitle"
            placeholder="Job Title"
          ></input>
        </label>
        <label>
          Company Name
          <input
            type="text"
            className="compName"
            placeholder="company"
          ></input>
        </label>
        <div className="expDateInput">
          <label>
            Start Date
            <input type="date" className="startDate"></input>
          </label>
          {/* <span>to</span> */}
          <label>
            End Date
            <input type="date" className="endDate"></input>
          </label>
        </div>

        <label className="expSummaryInput">
          Experience Summary
          <textarea
            placeholder="your experience"
            className="expSummary"
          ></textarea>
        </label>
        <button className="removeBtn" onClick={this.props.funcD}>
          remove
        </button>
      </div>
    );
  }
}

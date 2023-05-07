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
            data-ids={this.props.ids}
          ></input>
        </label>
        <label>
          Company Name
          <input
            type="text"
            className="compName"
            placeholder="company"
            data-ids={this.props.ids}
          ></input>
        </label>
        <div className="expDateInput">
          <label>
            Start Date
            <input
              type="date"
              className="startDate"
              data-ids={this.props.ids}
            ></input>
          </label>
          {/* <span>to</span> */}
          <label>
            End Date
            <input
              type="date"
              className="endDate"
              data-ids={this.props.ids}
            ></input>
          </label>
        </div>

        <label className="expSummaryInput">
          Experience Summary
          <textarea
            placeholder="your experience"
            className="expSummary"
            data-ids={this.props.ids}
          ></textarea>
        </label>
        <button
          className="removeBtn"
          data-ids={this.props.ids}
          onClick={this.props.funcD}
        >
          remove
        </button>
      </div>
    );
  }
}

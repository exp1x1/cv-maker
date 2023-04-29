import { Component } from "react";

export class ExperienceInput extends Component {
  render() {
    return (
      <div id={this.props.ids} onChange={this.props.funcUpdate}>
        <input
          type="text"
          className="title"
          placeholder="Job Title"
        ></input>
        <input
          type="text"
          className="compName"
          placeholder="company"
        ></input>
        <input type="date" className="startDate"></input>
        <span>to</span>
        <input type="date" className="endDate"></input>
        <textarea
          placeholder="your experience"
          className="expSummary"
        ></textarea>
        <button className="removeBtn" onClick={this.props.funcD}>
          remove
        </button>
      </div>
    );
  }
}

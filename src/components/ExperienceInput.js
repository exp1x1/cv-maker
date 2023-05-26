export function ExperienceInput(props) {
  const ids = props.ids;

  return (
    <div id={ids} onChange={props.handleChange} className="expForm">
      <label>
        Job Title
        <input
          type="text"
          className="jobTitle"
          placeholder="Job Title"
          data-ids={ids}
        ></input>
      </label>
      <label>
        Company Name
        <input
          type="text"
          className="compName"
          placeholder="company"
          data-ids={ids}
        ></input>
      </label>
      <div className="expDateInput">
        <label>
          Start Date
          <input type="date" className="startDate" data-ids={ids}></input>
        </label>
        {/* <span>to</span> */}
        <label>
          End Date
          <input type="date" className="endDate" data-ids={ids}></input>
        </label>
      </div>

      <label className="expSummaryInput">
        Experience Summary
        <textarea
          placeholder="your experience"
          className="expSummary"
          data-ids={ids}
        ></textarea>
      </label>
      <button
        className="removeBtn"
        data-ids={ids}
        onClick={props.handelDelete}
      >
        remove
      </button>
    </div>
  );
}

export function ExperienceInput(props) {
  const ids = props.ids;

  return (
    <div id={ids} onChange={props.funcUpdate} className="expForm">
      <label>
        Job Title
        <input
          type="text"
          className="jobTitle"
          placeholder="Job Title"
          ids={ids}
        ></input>
      </label>
      <label>
        Company Name
        <input
          type="text"
          className="compName"
          placeholder="company"
          ids={ids}
        ></input>
      </label>
      <div className="expDateInput">
        <label>
          Start Date
          <input type="date" className="startDate" ids={ids}></input>
        </label>
        {/* <span>to</span> */}
        <label>
          End Date
          <input type="date" className="endDate" ids={ids}></input>
        </label>
      </div>

      <label className="expSummaryInput">
        Experience Summary
        <textarea
          placeholder="your experience"
          className="expSummary"
          ids={ids}
        ></textarea>
      </label>
      <button className="removeBtn" ids={ids} onClick={props.funcD}>
        remove
      </button>
    </div>
  );
}

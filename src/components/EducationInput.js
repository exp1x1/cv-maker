export function EducationInput(props) {
  const ids = props.ids;

  return (
    <div id={ids} onChange={props.handleChange} className="eduForm">
      <label>
        Education
        <input
          typeof="text"
          data-ids={ids}
          className="degName"
          placeholder="Education Name"
        ></input>
      </label>
      <label>
        Institution
        <input
          type="text"
          data-ids={ids}
          className="uniName"
          placeholder="Institution Name"
        ></input>
      </label>
      <label>
        Completed Year
        <input
          data-ids={ids}
          type="number"
          placeholder="Completed Year"
          className="compYear"
        ></input>
      </label>
      <button
        className="eduRemoveBtn"
        data-ids={ids}
        onClick={props.handleDelete}
      >
        Remove Education
      </button>
    </div>
  );
}

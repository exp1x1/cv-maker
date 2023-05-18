export function Experience(props) {
  const { jobTitle, compName, startDate, endDate, expSummary } =
    props.data;

  return (
    <div className="experience">
      <h2>{jobTitle}</h2>
      <p>
        <span>{compName}</span>
        <span>{" ‖ "}</span>
        <span>{startDate}</span>
        <span>{" to "}</span>
        <span>{endDate}</span>
      </p>
      <pre>{expSummary}</pre>
    </div>
  );
}

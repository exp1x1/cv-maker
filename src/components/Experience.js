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

  // another solution >> i can't decide which one to use ??
  // this solution return one component with propr data provided by parent element

  // return Object.values(props.data).map((e) => {
  //   const { jobTitle, compName, startDate, endDate, expSummary } = e;
  //   return (
  //     <div className="experience" key={generateUniqueKey(6)}>
  //       <h2>{jobTitle}</h2>
  //       <p>
  //         <span>{compName}</span>
  //         <span>{" ‖ "}</span>
  //         <span>{startDate}</span>
  //         <span>{" to "}</span>
  //         <span>{endDate}</span>
  //       </p>
  //       <pre>{expSummary}</pre>
  //     </div>
  //   );
  // });
}

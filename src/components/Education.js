export function Education(props) {
  const { degName, uniName, compYear } = props.data;
  return (
    <div className="education">
      <h2>{degName}</h2>
      <p>
        <span>{uniName}</span> <span>-</span> <span>{compYear}</span>
      </p>
    </div>
  );
}

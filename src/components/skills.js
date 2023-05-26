import { generateUniqueKey } from "../helpFunction";

export const Skills = ({ skills }) => {
  const splitSkills = skills.split(",");

  const baseSkills = (
    <ul>
      <li>first Skill</li>
      <li>second Skill</li>
      <li>third Skill</li>
    </ul>
  );

  const renderSkills = (
    <ul>
      {splitSkills.map((e) => {
        return <li key={generateUniqueKey(3)}>{e}</li>;
      })}
    </ul>
  );

  return (
    <div className="skillHolder">
      <span className="title">Skills</span>
      {/* if skills array is empty render baseSkills otherwise render skills */}
      {skills !== "" ? renderSkills : baseSkills}
    </div>
  );
};

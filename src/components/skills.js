import { Component } from "react";
import { generateUniqueKey } from "../helpFunction";

export class Skills extends Component {
  render() {
    if (this.props.skill.length === 0) {
      return (
        <div className="skillHolder">
          <span className="title">Skills</span>
          <ul >
            <li>first Skill</li>
            <li>second Skill</li>
            <li>third Skill</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="skillHolder">
          <span className="title">Skills</span>

          <ul >
            {this.props.skill.map((e) => {
              return <li key={generateUniqueKey(3)}>{e}</li>;
            })}
          </ul>
        </div>
      );
    }
  }
}

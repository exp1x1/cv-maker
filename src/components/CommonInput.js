import { Component } from "react";

export class CommonDetailsInputs extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div onChange={this.props.func}>
        <input type="text" id="username" placeholder="Your Name"></input>
        <input
          type="number"
          id="userNumber"
          placeholder="Your Phone Number"
        ></input>
        <input
          type="email"
          id="userEmail"
          placeholder="Your Email"
        ></input>
        <input type="url" id="userSite" placeholder="Your Website"></input>
        <textarea id="summary" placeholder="Your summary"></textarea>
        <input typeof="text" id="skills"></input>
      </div>
    );
  }
}

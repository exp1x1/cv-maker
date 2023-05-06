import { Component } from "react";

export class CommonDetails extends Component {
  render() {
    const { name, phoneNumber, email, website, summary } =
      this.props.details;
    return (
      <div className="commonDetails">
        <h1>{name}</h1>
        <div>
          <span>{phoneNumber}</span>
          <span>{email}</span>
          <span>{website}</span>
        </div>
        <span className="title">Summary</span>
        <pre>{summary}</pre>
      </div>
    );
  }
}

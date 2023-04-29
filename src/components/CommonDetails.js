import { Component } from "react";

export class CommonDetails extends Component {
  render() {
    const { name, phoneNumber, email, website, summary } =
      this.props.details;
    return (
      <div>
        <h1 className="name">{name}</h1>
        <span>{phoneNumber}</span>
        <span>{email}</span>
        <span>{website}</span>
        <p>{summary}</p>
      </div>
    );
  }
}

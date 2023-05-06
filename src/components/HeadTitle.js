import { Component } from "react";

export class HeadTitle extends Component {
  render() {
    return <h1 className="title">{this.props.title}</h1>;
  }
}

import React, { Component } from "react";

function Title(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Title;

/*export class Title extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Title;*/

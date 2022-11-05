import React, { Component } from "react";

export class PropsClassComp extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <h3>Name - {this.props.name}</h3>
        <br />
        <h3>Age - {this.props.num}</h3>
        <br />
      </div>
    );
  }
}

export default PropsClassComp;

import React, { Component } from "react";

export class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count2: 1
    };

    this.onIncrement = this.onIncrement.bind(this)
  }

  onIncrement(count) {
    this.setState((prevVal) => {
      return {
        count: prevVal.count + 1
      }
    });
    this.setState((prevVal) => {
      return {
        count: prevVal.count + 1
      }
    });
  }
  onDecrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    // console.log("render", this.state);
    return (
      <div>
        ClassComp
        <h4>{this.state.count}</h4> <br />
        <h4>{this.state.count2}</h4>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={() => this.onDecrement()}>Decrement</button>
        <button onClick={() => this.onReset()}>Reset</button>
        <div>
          <button onClick={() => this.onIncrement2()}>Increment2</button>
        </div>
      </div>
    );
  }
}

export default ClassComp;

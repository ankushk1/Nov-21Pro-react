import React, { Component } from 'react'

export class ClassLC extends Component {

  constructor() {
    super()
    console.log('constructor called');
    this.state = {
      count : 1
    }
  }

  componentWillMount() {
    console.log('componentWillMount called');
    this.setState({
      count: this.state.count + 1
    })
  }

  componentDidMount(){
    console.log('componentDidMount called');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate called');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate called');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount called');
  }

  onIncrement() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log('render called');
    return (
      <div>ClassLC
        <h3>
        {this.state.count}
        </h3>
        <div>
          <button onClick={()=> this.onIncrement()}>Increment</button>
        </div>
      </div>
    )
  }
}

export default ClassLC
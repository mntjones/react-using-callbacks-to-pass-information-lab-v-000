import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  changeColor = () => {
    // calls getCurrentColor from Matrix - reads current color
    const currentColor = this.props.getCurrentColor();
    this.setState({color: currentColor})
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}

import React, { Component } from "react";
import Context from "../contexts/context";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };

    this.changeNumber = this.changeNumber.bind(this);
  }

  changeNumber() {
    this.setState({
      number: Math.random() * 100
    });
  }

  render() {
    return (
      <Context.Provider
        value={{
          number: this.state.number,
          changeNumber: this.changeNumber
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

import React, { Component } from "react";
class Lable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h5>
          {this.props.text}
        </h5>
      </>
    );
  }
}

export default Lable;

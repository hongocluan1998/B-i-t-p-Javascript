import React, { Component } from "react";
class Createcpn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <img
          style={{ width: 200, height: 250 }}
          src={this.props.anh}
          alt="ccc"
        />
      </>
    );
  }
}
// let {a ,b, c} = this.props
// tầng 2 : có thể dùng ...this.props
export default Createcpn;

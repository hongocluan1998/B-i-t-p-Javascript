import React, { Component } from "react";
import Createcpn from "./Createcpn";
import Lable from "./Lable";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          <Createcpn {...this.props} />
          <Lable {...this.props} />
        </div>
      </>
    );
  }
}

export default Card;

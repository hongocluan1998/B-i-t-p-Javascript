import React, { Component } from "react";
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      let x = {
        fontSize: "30px",
        backgroundColor: this.props.colorTest
      }
    return (
      <>
        <div style={x}>{this.props.children}</div>
        {/* con có thể nhận giá trị của biến trực tiếp được khai báo ở trên nó ! */}
      </>
    );
  }
}
    
export default Hello;

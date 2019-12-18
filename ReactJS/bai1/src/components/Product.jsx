import React, { Component } from "react";
class product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const sanPham = this.props.sp1;
    return (
      <>
        <div>
          <img src={sanPham.image} alt="Error"></img>
          <p>{sanPham.title}</p>
          <p>
            <b>{sanPham.price}</b>
          </p>
          <p>{sanPham.comment}</p>
        </div>
      </>
    );
  }
}

export default product;

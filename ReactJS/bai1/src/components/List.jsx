import React, { Component } from "react";
import Product from "./Product";
class list extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const listProducts = [
      {
        image: "https://dangcapdigital.com/upload/hinhanh/69912903580.jpg",
        title: "Iphone3",
        price: "16.000.000",
        comment: "ngon"
      },
      {
        image:
          "https://techland.com.vn/wp-content/uploads/2019/09/dien-thoai-iphone-11-pro-max-3a.jpg",
        title: "Iphone11",
        price: "16.000.000",
        comment: "ngon"
      }
    ];
    const tongHop = listProducts.map((item, index) => (
      <Product sp1={item} key={index} />
    ));
    console.log(tongHop);
    const sp = {
      image:
        "https://techland.com.vn/wp-content/uploads/2019/09/dien-thoai-iphone-11-pro-max-3a.jpg",
      title: "Iphone11",
      price: "16.000.000",
      comment: "ngon"
    };
    return (
      <>
        <h1>San pham</h1>
        {tongHop}
      </>
    );
  }
}

export default list;

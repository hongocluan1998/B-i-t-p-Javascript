import React from "react";
import "./App.css";
import Product from "./_components/Product";
import Try from "./_components/Try";

let list_product = [
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/188705/iphone-11-pro-black-600x600.jpg",
    title: "Iphone",
    price: "25.000.000 VND",
    status: true
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/204403/samsung-galaxy-a30s-green-400x460.png",
    title: "Samsung",
    price: "19.000.000 VND",
    status: true
  },
  {
    image:
      "https://salt.tikicdn.com/cache/550x550/ts/product/e1/02/63/83c26e50b63607187dce7068e74a6524.jpg",
    title: "Oppo",
    price: "16.000.000 VND",
    status: true
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-600x600.jpg",
    title: "Iphone",
    price: "22.000.000 VND",
    status: true
  }
];
let products = list_product.map((item, index) => {
  let result = "";
  if (item.status) {
    result = (
      <Product
        key={index}
        image={item.image}
        title={item.title}
        price={item.price}
      />
    );
  }
  return result;
});

function App() {
  return (
    <>
      <br />
      <div className="container">
        <div className="row">{products}</div>
        <br />
        <div className="row">
          <Try />
        </div>
      </div>
      <br />
    </>
  );
}

export default App;

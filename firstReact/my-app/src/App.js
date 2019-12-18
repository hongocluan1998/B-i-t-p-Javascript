import React from "react";
import "./App.css";
//import Hello from "./Components/Hello";
import Card from "./Components/Card";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <br/>
          <div className="row text-center">
            <div className="col-md-12">
              <h2>Thế giới gi động</h2>
            </div>
          </div>
          <br/>
          <div className="row text-center">
            <div className="col-md-3">
              <Card
                text="Điện thoại iphone"
                anh="https://techland.com.vn/wp-content/uploads/2019/09/dien-thoai-iphone-11-pro-max-3a.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                text="Điện thoại samsung "
                anh="http://media.vietq.vn/files/lelan/2019/05/08/dien-thoai-iphone-2-19-8-5-2019.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                text="Điện thoại oppo "
                anh="https://cdn.tgdd.vn/Products/Images/42/199801/oppo-f11-mtp-400x460.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                text="Điện thoại lg "
                anh="https://didongviet.vn/pub/media/catalog/product//l/g/lg-g6-32gb-ban-my_2.jpg"
              />
            </div>
          </div>
        </div>

        {/* <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-3">
              <Hello colorTest="yellow">A</Hello>
            </div>
            <div className="col-md-3">
              <Hello colorTest="red">B</Hello>
            </div>
            <div className="col-md-3">
              <Hello colorTest="white">C</Hello>
            </div>
            <div className="col-md-3">
              <Hello colorTest="black">D</Hello>
            </div>
          </div>
        </div>

        <br /> */}

        {/* 
            có thể truyền được tất cả nếu sử dụng cú pháp như trên !
            thẻ inline k thể set width !
            thẻ inline-block thì những phần tử con bên trong nó sẽ là block !
            2 cách style: - style thông qua file css, chú ý import file css vào file html (dùng cho những component cố định)
                          - style trực tiếp trong component (chú ý cú pháp css của jsx khác với css)
        */}
      </>
    );
  }
}

export default App;

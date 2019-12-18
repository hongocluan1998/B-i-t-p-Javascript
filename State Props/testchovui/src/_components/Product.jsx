import React, { Component } from "react";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true,
      count : 100,
      
    };
  }
  

  Change = () => {
    if (this.state.check === true) {
      alert("Bạn có chắc chắn mua !")
      this.setState({
        check: false
      });
    } else {
      alert("Bạn muốn hủy mua !")
      this.setState({
        check: true
      });
    }
  };
  timeChange = () => {
    // this.setState((prevState) =>{
    //   return {
    //     count : prevState.count + 1 // đảm bảo rằng giá trị count đã thay đổi
    //   }
    // }
    this.setState({
        count: this.state.count + 1
    }, () => {console.log("asdw")}); // sau khi thực hiện state xong rồi gọi hàm consolo.log (callback), dùng khi có 2 state
    
  };
  
  componentDidMount(){
    setInterval(this.timeChange, 1000);
    // componentDidMount sẽ gọi sau khi gọi hàm render
  }

  
  render() {
    return (
      <>
        <div className="col-md-3 text-center">
          <img
            style={{ width: 270, height: 300 }}
            src={this.props.image}
            alt="ccc"
          />
          <h3>{this.props.title}</h3>
          <p>
            <b>{this.props.price}</b>
          </p>
          <button onClick={this.Change} className="btn btn-warning">
            {this.state.check === true ? "Mua ngay" : "Đã mua"}
          </button>

    <p><b>{this.state.count}</b></p>
        </div>

        <br/>
        
      </>
    );
  }
}

export default Product;
// khi hàm Setstate() được gọi xong thì hàm render() sẽ được gọi lại
// Setstate là hàm bất đồng bộ
// prevState đảm bảo cho giá trị 
// Higher-order-function : nhận vào cái gì thì phải trả lại đúng cấu trúc nhận vào (nhận vào [] thu đc [])
// Event target input
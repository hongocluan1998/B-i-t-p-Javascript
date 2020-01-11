import React, { Component } from "react";
import Forms from "./Forms";
import Item from "./Item";
class ListTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          name: "Hello React"
        },
        {
          id: 1,
          name: "Hi Redux"
        },
        {
          id: 2,
          name: "Hello State"
        }
      ],
      text: "",
      stt: -1,
      isAdd: true
    };
  }
  handlerSubmit = e => {
    e.preventDefault();
    if (this.state.isAdd) {
      if (e.target.name.value !== "") {
        var arr = this.state.data;
        var temp1 = this.state.data[arr.length - 1].id;
        let user = { id: temp1 + 1, name: e.target.name.value };
        arr.push(user);
        this.setState({
          data: arr
        });
        console.log(this.state.data);
      }
      e.target.name.value = null;
    } else {
      let obj = {
        id: "",
        name: ""
      };
      let dataNew = [];
      this.state.data.forEach(item => {
        if (item.id == this.state.stt) {
          obj.id = item.id;
          obj.name = this.state.text;
          dataNew.push(obj);
        }else{
          dataNew.push(item);
        }
        
      });
      this.setState({
        data: dataNew,
        isAdd: true
      });
    }
    this.setState({
      text:""
    })
  };
  handlerDelete = e => {
    //console.log(e.target.id);
    let arr = this.state.data;
    let index = arr.findIndex(item => item.id == e.target.id);
    arr.splice(index, 1);
    this.setState({
      data: arr
    });
    //console.log(this.state.data);
  };
  //
  handlerEdit = e => {
    console.log(e.target.id);
    let arr = this.state.data;
    let index = arr.findIndex(item => item.id == e.target.id);
    this.setState({
      text: arr[index].name,
      isAdd: false,
      stt: e.target.id
    });
  };
  handlerInput = e => {
    this.setState({
      text: e.target.value
    });
    //console.log(e.target.value);
  };
  render() {
    var items = this.state.data.map((item, index) => {
      return (
        <Item
          handlerEdit={this.handlerEdit}
          handlerDelete={this.handlerDelete}
          key={index}
          id={item.id}
          name={item.name}
        />
      );
    });
    return (
      <>
        <div className="container">
          <br />
          <div className="row text-center">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <Forms
                handlerSubmit={this.handlerSubmit}
                haizz={this.state.text}
                handlerInput={this.handlerInput}
                status={this.state.isAdd}
              />
            </div>
            <div className="col-md-3"></div>
          </div>
          <br />
          <div className="row text-center">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{items}</tbody>
              </table>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;

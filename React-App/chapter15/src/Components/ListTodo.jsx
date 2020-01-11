import React, { Component } from "react";
import Item from "./Item";
class ListTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var listTodo = this.props.todo.map((item, index) => {
      return <Item handlerDelete={this.props.handlerDelete} key={index} id={item.id} name ={item.name} />;
    });
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {listTodo}
              </tbody>
        </table>
      </>
    );
  }
}

export default ListTodo;

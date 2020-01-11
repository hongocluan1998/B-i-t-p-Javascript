import React, { Component } from "react";
import FormTodo from "./FormTodo";
import ListTodo from "./ListTodo";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          name: "Hoc HTML"
        },
        {
          id: 2,
          name: "Hoc CSS"
        },
        {
          id: 3,
          name: "Hoc JS"
        },
        {
          id: 4,
          name: "Hoc REACT"
        }
      ]
    };
    this.arrLength = this.state.todos.length;
  }
  handlerSubmit = (e, name) => {
    e.preventDefault();
    this.arrLength += 1;
    let todo = { id: this.arrLength, name };
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };
  handlerDelete = e => {
    let arr = this.state.todos;
    let index = arr.findIndex(item => item.id == e.target.id);
    arr.splice(index, 1);
    this.setState({
      todos: arr
    });
  };
  
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <FormTodo
                data={this.state.todos}
                handlerSubmit={this.handlerSubmit}
              />
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-12">
              <ListTodo
                handlerDelete={this.handlerDelete}
                todo={this.state.todos}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Content;

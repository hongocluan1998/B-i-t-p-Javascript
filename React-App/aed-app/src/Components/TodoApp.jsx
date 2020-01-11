import React, { Component } from "react";
import Headder from "./Headder";
import Content from "./Content";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row text-center">
            <div className="col-md-12">
              <Headder />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12">
              <Content />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TodoApp;

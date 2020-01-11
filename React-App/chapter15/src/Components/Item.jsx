import React, { Component } from "react";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>
            <button className="btn btn-danger" >Edit</button>
            <button id={this.props.id} className="btn btn-danger" onClick={this.props.handlerDelete}>Delete</button>
          </td>
        </tr>
      </>
    );
  }
}

export default Item;

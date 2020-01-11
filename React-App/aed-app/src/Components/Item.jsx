import React, { Component } from "react";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //console.log(this.props);
    let {id,name} = this.props;
    return (
      <>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>
            <button id={id} onClick={this.props.handlerEdit} className="btn btn-danger">Edit</button>
            <b> </b>
            <button id={id} onClick={this.props.handlerDelete} className="btn btn-warning">Delete</button>
          </td>
        </tr>
      </>
    );
  }
}

export default Item;

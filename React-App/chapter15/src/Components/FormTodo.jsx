import React, { Component } from "react";
class FormTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  Change = e => {
    this.setState({
      name: e.target.value
    });
  };
  render() {
    console.log(this.state.name);
    return (
      <>
        <form
          onSubmit={e => {
            this.props.handlerSubmit(e, this.state.name);
          }}
        >
          <div className="form-group">
            <input
              name="name"
              value={this.state.name}
              className="form-control"
              placeholder="Enter email"
              onChange={this.Change}
            />
          </div>

          <button className="btn btn-warning">ADD</button>
        </form>
      </>
    );
  }
}

export default FormTodo;

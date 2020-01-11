import React, { Component } from "react";
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  static getDerivedStateFromProps(props, state) {
    //console.log("1: " + props.haizz);
    //console.log("2: " + state.text);
    if (props.haizz !== state.text) {
      return {
        text: props.haizz
      };
    }
    return null;
  }

  render() {
    //console.log(123);
    return (
      <>
        <form onSubmit={this.props.handlerSubmit}>
          <div className="form-group row">
            <div className="col-sm-8">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={this.props.handlerInput}
                value={this.state.text}
              />
            </div>
            <button className="btn btn-primary col-sm-4 col-form-label">
              {this.props.status ? "ADD":"EDIT"}
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Forms;

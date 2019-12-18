import React, { Component } from "react";
class Navigate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container-fluid">
            <br/>
          <div className="row">
            <div className="col-md-3">
              <span class="badge badge-warning">
                <h3>Thế giới di động </h3>
              </span>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-3">
                  <span class="badge badge-secondary">HOME</span>
                </div>
                <div className="col-md-3">
                  <span class="badge badge-secondary">SHOP</span>
                </div>
                <div className="col-md-3">
                  <span class="badge badge-secondary">LOGIN</span>
                </div>
                <div className="col-md-3">
                  <span class="badge badge-secondary">REGISTER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navigate;

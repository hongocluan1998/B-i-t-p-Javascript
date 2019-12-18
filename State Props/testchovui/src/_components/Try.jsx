import React, { Component } from 'react';
class Try extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            try : 0
         };
    }
    Event = () => {
        this.setState({
            try: this.state.try + 1
        });
      };
    render() {
        return (
            <>
            <h1>{this.state.try}</h1>
        <button onClick={this.Event} className="btn btn-danger">+</button>
            </>
        );
    }
}

export default Try;
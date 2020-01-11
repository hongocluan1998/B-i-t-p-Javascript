import React, { Component } from 'react';
class Headder extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <h3><b>TodoList---App</b></h3>
            <p><b>Add, Edit, Delete</b></p>
            </>
        );
    }
}

export default Headder;
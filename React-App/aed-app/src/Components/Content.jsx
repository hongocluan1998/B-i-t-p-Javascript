import React, { Component } from 'react';
import ListTodo from './ListTodo';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <ListTodo/>
            </>
        );
    }
}

export default Content;
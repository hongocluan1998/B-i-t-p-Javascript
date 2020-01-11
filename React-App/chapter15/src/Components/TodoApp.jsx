import React, { Component } from 'react';
import Header from './Header';
import Content from './Content'
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <Header/>
                    </div>
                </div>
            
            
                <div className="row">
                    <div className="col-md-12">
                    <Content/>
                    </div>
                </div>
            
            </div>
            </>
        );
    }
}

export default TodoApp;
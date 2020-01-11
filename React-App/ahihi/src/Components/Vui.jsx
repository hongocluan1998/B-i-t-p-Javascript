import React, { Component } from 'react';
class Vui extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        
        return (
            <>
            Name: <input name="name" value={this.props.name} onChange={this.props.handlerChager}/>
            <br/>
            Email: <input name="email" value={this.props.email} onChange={this.props.handlerChager}/>
            <br/>
            </>
        );
    }
}

export default Vui;
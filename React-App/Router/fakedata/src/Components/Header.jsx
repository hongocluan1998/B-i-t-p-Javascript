import React, { Component } from 'react';

import { BrowserRouter as  Switch,Link,Route } from "react-router-dom";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/contax">Contax</Link>
                    </li>
                </ul>
            </h1>
            </>
        );
    }
}

export default Header;
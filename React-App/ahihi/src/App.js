import React from "react";
import "./App.css";
import Vui from "./Components/Vui";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "ekrjgnerklg"
      name: "",
      email: ""
    };
  }

  handlerChager = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      [e.target.name] : e.target.value,
      [e.target.email] : e.target.value
    });
    
  };
  
  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps Hello");
  //   return null;
  // }
  // componentDidMount() {
  //   console.log("componentDidMount Hello");
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //     return true;
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }
  
  render() {
    // console.log("render Hello");
    // console.log(this.state.name);
    return (
      <>
        <Vui name = {this.state.name}
              email = {this.state.email}
              handlerChager = {this.handlerChager} />
        <br />
        <p >
           Name : {this.state.name}</p>
        <p>
          Email : {this.state.email}
        </p>
      </>
    );
  }
}

export default App;

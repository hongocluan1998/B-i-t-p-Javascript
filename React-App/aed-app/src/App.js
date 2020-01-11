import React from "react";
import "./App.css";
import TodoApp from "./Components/TodoApp";

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {  };
  }
  render() {
      return (
          <>
          <TodoApp/>
          </>
      );
  }
}

export default App;

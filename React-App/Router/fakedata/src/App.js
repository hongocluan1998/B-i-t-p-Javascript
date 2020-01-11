import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contaxt from "./Components/Contaxt";

function App() {
  return <>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/about" component={Contaxt}/>
      </Switch>
    <Footer/>
  </>;
}

export default App;

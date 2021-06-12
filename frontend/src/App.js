//import logo from "./images/logo.svg";
import "./App.css";
import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Sidebar />
        <Home />
      </Fragment>
    );
  }
}

export default App;

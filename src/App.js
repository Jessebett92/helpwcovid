import React, { Component } from "react";
import { Router } from "@reach/router";

import Home from "./Components/pages/home";
import ConfTesting from "./Components/questions/conftesting";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: "NOT_LOGGED_IN",
    };
  }

  render() {
    return (
      <div className="pageWrapper">
        <Router>
          <Home path="/" />
          <ConfTesting path="/questionOne" />
        </Router>
      </div>
    );
  }
}

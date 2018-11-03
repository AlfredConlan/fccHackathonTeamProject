import React, { Component, Fragment } from "react"
import logo from "./logo.svg"
import "./App.css"

import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./components/Home"
import Info from "./components/Info"

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
        </Fragment>
      </Router>
    )
  }
}

export default App

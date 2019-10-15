import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import {SearchContainer} from "./components/Search";
import Books from "./components/Books";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component
{
  render()
  {
    return (
      <div>
        <div className="container">

          {/* Navigation */}
          <Nav />

          {/* Jumbotron */}
          <Jumbotron />

          {/* Main Content */}
          <Router>
            <Switch>
              <Route exact path="/" component={SearchContainer} />
              <Route path="/search" component={SearchContainer} />
              <Route path="/books" component={Books} />
            </Switch>
          </Router>
          
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="1" pageSize={9} country="in" category="general" />
            </Route>
            <Route exact path="/science">
              <News key="2" pageSize={9} country="in" category="science" />
            </Route>
            <Route exact path="/technology">
              <News key="3" pageSize={9} country="in" category="technology" />
            </Route>
            <Route exact path="/health">
              <News key="4" pageSize={9} country="in" category="health" />
            </Route>

            <Route exact path="/sports">
              <News key="5" pageSize={9} country="in" category="sports" />
            </Route>

            <Route exact path="/entertainment">
              <News
                key="6"
                pageSize={9}
                country="in"
                category="entertainment"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

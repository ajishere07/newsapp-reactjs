import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  state = {
    progress: 0,
  };
  handleProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => this.handleProgress(0)}
          />
          <Switch>
            <Route exact path="/">
              <News
                handleProgress={this.handleProgress}
                key="1"
                pageSize={9}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/science">
              <News
                handleProgress={this.handleProgress}
                key="2"
                pageSize={9}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/technology">
              <News
                handleProgress={this.handleProgress}
                key="3"
                pageSize={9}
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/health">
              <News
                handleProgress={this.handleProgress}
                key="4"
                pageSize={9}
                country="in"
                category="health"
              />
            </Route>

            <Route exact path="/sports">
              <News
                handleProgress={this.handleProgress}
                key="5"
                pageSize={9}
                country="in"
                category="sports"
              />
            </Route>

            <Route exact path="/entertainment">
              <News
                handleProgress={this.handleProgress}
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

import React, { Component } from "react";
import loader from "./ajax-loader.gif";

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center" style={{ height: "100vh" }}>
        <img src={loader} alt="loading"></img>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class NewsItem extends Component {
  constructor() {
    super();
    console.log("ok");
  }
  render() {
    let { title, description, url, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Read
            </a>
          </div>
        </div>
      </div>
    );
  }
}
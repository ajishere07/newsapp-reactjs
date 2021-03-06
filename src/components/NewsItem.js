import React, { Component } from "react";

export default class NewsItem extends Component {
  constructor() {
    super();
  }
  render() {
    let { title, description, url, newsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-muted">
                By <span class="badge rounded-pill bg-success">{author} </span>
                on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Read
            </a>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let res = await axios.get(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=50455fa67dd042a08abb0b7af3cb514c"
    );
    console.log(res.data);
    let parsedData = await res.data;
    this.setState({ articles: parsedData.articles });
  }
  render() {
    console.log("rendered");
    return (
      <div className="container my-3">
        <h2>SnapNews - Top headlines</h2>
        <div className="row">
          {this.state.articles.map((item) => (
            <div key={item.url} className="col-md-4">
              <NewsItem
                title={item?.title.slice(0, 88)}
                description={item?.description.slice(0, 85)}
                url={item?.urlToImage}
                newsUrl={item?.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

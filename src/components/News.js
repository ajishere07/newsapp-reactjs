import React, { Component } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      articles: [],
      loading: false,
      totalArticles: 0,
    };
  }
  async componentDidMount() {
    let res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=50455fa67dd042a08abb0b7af3cb514c&page=${this.state.page}&pageSize=9`
    );
    console.log(res.data);
    let parsedData = await res.data;
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }
  // handlePrevPage = async () => {
  //   await this.setState({
  //     page: (this.state.page -= 1),
  //   });
  //   let res = await axios.get(
  //     `https://newsapi.org/v2/top-headlines?country=in&apiKey=50455fa67dd042a08abb0b7af3cb514c&page=${this.state.page}`
  //   );
  //   // console.log(res.data);
  //   let parsedData = await res.data;
  //   this.setState({ articles: parsedData.articles });
  // };
  // handleNextPage = async () => {
  //   await this.setState({
  //     page: (this.state.page += 1),
  //   });
  //   let res = await axios.get(
  //     `https://newsapi.org/v2/top-headlines?country=in&apiKey=50455fa67dd042a08abb0b7af3cb514c&page=${this.state.page}`
  //   );
  //   // console.log(res.data);
  //   let parsedData = await res.data;
  //   this.setState({ articles: parsedData.articles });
  // };

  handlePageRequest = async (a) => {
    if (a === "next") {
      if (this.state.page < Math.ceil(this.state.totalArticles / 9)) {
        this.setState({
          page: (this.state.page += 1),
        });
      }
    } else if (a === "prev") {
      this.setState({
        page: (this.state.page -= 1),
      });
    }
    let res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=50455fa67dd042a08abb0b7af3cb514c&page=${this.state.page}&pageSize=9`
    );
    // console.log(res.data);
    let parsedData = await res.data;
    this.setState({ articles: parsedData.articles });
  };

  render() {
    console.log("rendered");
    return (
      <div className="container my-3">
        <h2>SnapNews - Top headlines</h2>
        <div className="row">
          {this.state.articles.map((item) => (
            <div key={item.url} className="col-md-4">
              <NewsItem
                title={item.title === null ? "null" : item.title.slice(0, 88)}
                description={
                  item.description === null
                    ? "null"
                    : item.description.slice(0, 85)
                }
                url={item.urlToImage === null ? "null" : item.urlToImage}
                newsUrl={item.url === null ? "null" : item.url}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={() => {
              this.handlePageRequest("prev");
            }}
          >
            &larr; Previous
          </button>
          <p style={{ fontSize: "2rem" }}>{this.state.page}</p>
          <button
            disabled={
              this.state.page === Math.ceil(this.state.totalArticles / 9)
            }
            type="button"
            class="btn btn-dark"
            onClick={() => {
              this.handlePageRequest("next");
            }}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

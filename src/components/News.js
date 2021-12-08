import React, { Component } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import Loading from "./Loading";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProp = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      articles: [],
      loading: true,
      totalArticles: 0,
    };
    document.title = `${this.capitalize(this.props.category)} - SnapNews`;
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=50455fa67dd042a08abb0b7af3cb514c&page=${this.state.page}&pageSize=9`
    );
    console.log(this.state.loading);
    let parsedData = await res.data;
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    console.log(this.state.loading);
  }

  handlePageRequest = async (a) => {
    if (a === "next") {
      this.setState({ loading: true });
      if (this.state.page < Math.ceil(this.state.totalArticles / 9)) {
        this.setState({
          page: (this.state.page += 1),
        });
      }
    } else if (a === "prev") {
      this.setState({ loading: true });
      this.setState({
        page: (this.state.page -= 1),
      });
    }
    let res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=50455fa67dd042a08abb0b7af3cb514c&page=${this.state.page}&pageSize=9`
    );

    let parsedData = await res.data;
    this.setState({ articles: parsedData.articles, loading: false });
  };

  render() {
    console.log("rendered");
    return (
      <div className="container my-3">
        <h2>SnapNews - Top headlines</h2>
        {this.state.loading ? (
          <Loading />
        ) : (
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
                  url={
                    item.urlToImage === null ? "not available" : item.urlToImage
                  }
                  newsUrl={item.url === null ? "not available" : item.url}
                  author={item.author === null ? "unknown" : item.author}
                  date={
                    item.publishedAt === null
                      ? "not available"
                      : item.publishedAt
                  }
                />
              </div>
            ))}
          </div>
        )}

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

import React, { Component } from "react";
import axios from "axios";

import BlogCard from "../blogCard/blogCard.jsx";

class MediumBlogs extends Component {
  state = {
    url:
        // "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@uxplanet",
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40" +
      this.props.username,
    items: [],
  };

  componentDidMount() {
    axios
      .get(this.state.url)
      .then((response) => {
        console.log(response.data);
        this.setState({ items: response.data.items });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.items.map((item) => (
          <BlogCard key={item.key} blog={item} />
        ))}
      </React.Fragment>
    );
  }
}

export default MediumBlogs;

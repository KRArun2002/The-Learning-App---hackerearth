import React, { Component } from "react";
import axios from "axios";

import BlogCard from "../blogCard/blogCard";

class UxPlanetBlogs extends Component {
  state = {
    url:
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@uxplanet" ,
        items: []
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

export default UxPlanetBlogs;

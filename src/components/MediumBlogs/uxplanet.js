import React, { Component } from "react";
import axios from "axios";

import BlogCard from "../blogCard/blogCard";
import "../blogscss/blog2.css";

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
        <div className="backgr">
        {this.state.items.map((item) => (
          <BlogCard key={item.key} blog={item} />
        ))}
        </div>
      </React.Fragment>
    );
  }
}

export default UxPlanetBlogs;

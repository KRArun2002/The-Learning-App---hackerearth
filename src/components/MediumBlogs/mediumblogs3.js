import React, { Component } from "react";
import axios from "axios";

import BlogCard from "../blogCard/blogCard";
import "../blogscss/blog6.css";

class MediumBlogs3 extends Component {
  state = {
    url:
     "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40willcritchlow",
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
          <div className= "back1">
          <br/>
          <div className="offset-3">
            <h1 style={{color: "black"}}><mark>MEDIUM LEADERSHIP</mark></h1>
          </div>
            <br/>
        {this.state.items.map((item) => (
          <BlogCard key={item.key} blog={item} />
        ))}
        </div>
      </React.Fragment>
    );
  }
}

export default MediumBlogs3;

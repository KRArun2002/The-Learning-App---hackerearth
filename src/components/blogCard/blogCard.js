import React from "react";
import "./blogCard.css";
import {Col} from 'reactstrap';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle
} from "reactstrap";


export default function BlogCard({ blog }) {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }
  return (

    <div style={{marginLeft: 120}}>
       {/* <div class="blog-container" onClick={() => openUrlInNewTab(blog.url)}>
         <a class="blog-card" href={blog.link}>
           <h3 className="blog-title">{blog.title}</h3>
           <p class="small">{blog.description}</p>
         </a>
       </div> */}
  <Col xs={10} md={12}>
  <Card style={{backgroundColor: "lightgrey"}} className='FullQuestion' onClick={() => openUrlInNewTab(blog.url)}>
    <a className="blog-card" href={blog.link}>
    <CardBody className='row bodyCardClass' >
    
      <div className="column oneDiv">
      </div>
      <div className='column twoDiv' >
        <img src={blog.thumbnail} className='AuthorImage' />
      </div>
      <div className='column bodyDiv'   >
        <CardTitle className='CardTitleStyle'><strong>{blog.title}</strong></CardTitle>
        <CardSubtitle className="cardSubStyle" >
        Author: {blog.author} <br/ >
        Published: {blog.pubDate}
        </CardSubtitle>
      </div>
      
    </CardBody>
    </a>
  </Card>
  </Col>
  </div>
    


  );
}

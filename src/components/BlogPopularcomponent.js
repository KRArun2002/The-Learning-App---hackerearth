import React, { Component, useEffect } from 'react';
import {PostsData} from '../shared/blogsdata';
import './card.scss';
import MediumBlogs from './MediumBlogs/mediumBlogs';
import UxPlanetBlogs from './MediumBlogs/uxplanet';
import { Redirect } from 'react-router';
import { Router, Switch, Route, useHistory,Link } from "react-router-dom";

class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {

    
      return <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  
  
  class Title extends React.Component {
    render() {
      return <section className="app-title">
        <div className="app-title-content">
          <h1>Trending Blogs</h1>
          <p>Covering hot topics, ranging from business to technology</p>
         
        </div>
      </section>
    }
  }
  
  
  function Button(props) {
        const history = useHistory();
        console.log(props)
      return (
          <div>
             <button className="button button-primary" onClick={() => history.push(props.path)} >
                <i className="fa fa-chevron-right"></i> Find out here
            </button>
        </div>
      )
  }
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title">{category}</h4>
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">October 2020</p>
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          
          <Button path={this.props.path}/>
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text} path={this.props.details.path}/>
        </article>
      )
    }
  }

 export default Main;
  

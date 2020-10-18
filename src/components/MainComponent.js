import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Forum from './ForumComponent';
import MediumBlogs from './MediumBlogs/mediumBlogs';
import UxPlanetBlogs from './MediumBlogs/uxplanet';
import { SUBJECT } from '../shared/subject'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Popular from './PopularwebComponent';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
        subject: SUBJECT,
    }
  }


  render() {

    const HomePage = () => {
        return(
            <Home subject={this.state.subject}
            />
        );
      }

      const forumPage = () => {
        return(
          <Forum />
        )
      }

      const popularpage = () => {
        return(
          <Popular />
        )
      }

      const mediumPage = () => {
        return(
          <MediumBlogs />
        )
      }

      const uxBlog = () => {
        return(
          <UxPlanetBlogs />
        )
      }

    return (
      <>
      <div>
        <Header />
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/forum' component={forumPage} />
            <Route path='/mediumblogs' component={mediumPage} />
            <Route path='/uxplanetblogs' component={uxBlog} />
           <Route path='/popularweb' component={popularpage} />
           <Route path='/stackoverflowblogs' component={() => { 
              window.location.href = 'https://communitylearn.herokuapp.com/'; 
              return null;
          }}/>
            <Redirect to="/home" />
        </Switch>
        <Footer />
        </div>
      </>
    );
  }
}

export default Main;
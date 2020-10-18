import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Forum from './ForumComponent';
import MediumBlogs from './MediumBlogs/mediumBlogs';
import MediumBlogs1 from './MediumBlogs/mediumblog1';
import MediumBlogs2 from './MediumBlogs/mediumblogs2'
import MediumBlogs3 from './MediumBlogs/mediumblogs3';
import UxPlanetBlogs from './MediumBlogs/uxplanet';
import { SUBJECT } from '../shared/subject'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Popular from './PopularwebComponent';
import LoginPage from './LoginPageComponent';
import Course from './PhysicsComponent';
import Java from './JavaComponent';
import Python from './PythonComponent';
import Biology from './BiologyComponent';

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

      const mediumPage1 = () => {
        return(
          <MediumBlogs1 />
        )
      }
      const mediumPage2 = () => {
        return(
          <MediumBlogs2 />
        )
      }
      const mediumPage3 = () => {
        return(
          <MediumBlogs3 />
        )
      }

      const uxBlog = () => {
        return(
          <UxPlanetBlogs />
        )
      }

      const dashboard = () => {
        return(
          <LoginPage />
        )
      }

      const java = () => {
        return(
          <Java />
        )
      }

      const python = () => {
        return (
          <Python />
        )
      }

      const physics = () => {
        return(
          <Course />
        )
      }

      const biology = () => {
        return(
          <Biology />
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
            <Route path='/mediumblogsbusiness' component={mediumPage1} />
            <Route path='/mediumblogseducation' component={mediumPage2} />
            <Route path='/mediumblogsleadership' component={mediumPage3} />
            <Route path='/uxplanetblogs' component={uxBlog} />
            <Route path = '/dashboard' component={dashboard} />
           <Route path='/popularweb' component={popularpage} />
           <Route path='/java' component = {java} />
           <Route path='/python' component= {python} />
           <Route path='physics' component={physics} />
           <Route path='/biology' component = {biology} />
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
import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Forum from './ForumComponent'; 
import { SUBJECT } from '../shared/subject'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


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

    return (
      <div>
        <Header />
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/forum' component={forumPage} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
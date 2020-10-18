import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './DashboardComponent';
import Studentdetails from './StudentdetailComponent';
import Courses from './CoursesComponent';
import Support from './SupportComponent';
import Team from './TeamComponent';
import Notifications from './NotificationsComponent';

class Loginpage extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path="/studentdetail" component={Studentdetails} />
                    <Route path="/courses" component={Courses} />
                    <Route path="/support" component={Support} />
                    <Route path="/team" component={Team} />
                    <Route path="/notifications" component={Notifications} />
                </Switch>
                </Router>
        );
    }

}

export default Loginpage; 
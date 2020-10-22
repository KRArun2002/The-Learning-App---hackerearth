import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './DashboardComponent';
import Studentdetails from './StudentdetailComponent';
import Courses from './CoursesComponent';
import Support from './SupportComponent';
import Team from './TeamComponent';
import Notifications from './NotificationsComponent';
import { useAuth0 } from "@auth0/auth0-react";

const Loginpage = () => {
        const { user, isAuthenticated } = useAuth0();
        return (
            isAuthenticated && (
            <Router>
                <Navbar />
                <br/>
                <Switch>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path="/studentdetail" component={Studentdetails} />
                    <Route path="/courses" component={Courses} />
                    <Route path="/support" component={Support} />
                    <Route path="/team" component={Team} />
                    <Route path="/notifications" component={Notifications} />
                </Switch>
                </Router>
            )
        );
    }

export default Loginpage; 
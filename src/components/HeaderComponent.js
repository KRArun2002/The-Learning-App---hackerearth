import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron
    ,Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label  } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super();
        this.state= {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleLogin(event) {
          this.toggleModal();
          alert("Username: "+ this.username.value+ "Password: "+ this.password.value
            +"Remember: " + this.remember.checked);
            event.preventDefault();
      }


  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className="mr-5" href="/">
            <img src="assets/images/logo.png" height="45" width="55"
                    alt="HomeLearn" />   
            </NavbarBrand>

        <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-book fa-lg"></span> Courses</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link"  to='/menu'><span className="fa fa-gamepad fa-lg"></span> Gamify</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-globe fa-lg"></span> PopularWeb</NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Button className="btn btn-outline-success btn-sm mr-2" outline onClick={this.toggleModal}>
                        <span className="fa fa-sign-in fa-lg">  Login</span>
                    </Button>
                </NavItem>
                <NavItem>
                    <Button className="btn btn-outline-success btn-sm" outline onClick={this.toggleModal}>
                        <span className="fa fa-user-plus fa-lg">  Signup</span>
                    </Button>
                </NavItem>

            </Nav>
        </Collapse>
        </div>
      </Navbar>

      <Jumbotron>
      <div className="container">
        <div className="row text-center">
            <div className="col-12">
                <h2>Home Learn</h2>
            </div>            
            <div className="col-12">
                <h3>Making Learning Fun</h3>
            </div>            
        </div>
      </div>
       </Jumbotron>

       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
           <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
           <ModalBody>
               <Form onSubmit={this.handleLogin}>
                   <FormGroup>
                       <Label htmlFor="username">Username</Label>
                       <Input type="text" id="username" name="username" 
                            innerRef={(input) => this.username = input }/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor="password">Password</Label>
                       <Input type="password" id="password" name="password"
                            innerRef={(input) => this.password = input} />
                   </FormGroup>
                   <FormGroup check>
                       <Label check>
                           <Input type="checkbox" name="remember"
                           innerRef={(input) => this.remember = input}  /> 
                           Remember me
                       </Label>
                   </FormGroup>
                   <Button type="submit" value="submit" color="bg-primary">Login</Button>

               </Form>
           </ModalBody>
       </Modal>
    </React.Fragment>
    );
  }
}

export default Header;
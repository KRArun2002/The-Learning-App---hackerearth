import React from 'react';
import Bio from '../images/biology.jpg/.';
import Favatar from '../images/favatar.png/.';
import Mavatar from '../images/mavatar.png/.';
import M1avatar from '../images/m1avatar.png/.';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron
  ,Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label  } from 'reactstrap';

class Biology extends React.Component {

  constructor() {
    super();
    
    this.state= {
        isNavOpen: false,
        isModalOpen: false,
        isOpen: false
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

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  handleLogin(event) {
      this.toggleModal();
      alert("Username: "+ this.username.value+ "Password: "+ this.password.value
        +"Remember: " + this.remember.checked);
        event.preventDefault();
  }


  
  render(){
    return (
      <div style={{marginLeft: 20}} className="container-fluid">
        <br/><br/>
           <img src={Bio} alt="biology" />  
           <br/>
        <div className="grid-container1">
            <div className="grid-child">
              <br/>
            <h1>BIOLOGY  <button className="button" onClick={this.toggleModal}>ENROLL NOW</button></h1> 
            <h3>ABOUT THIS COURSE</h3>
           
            <p>Life is teeming in every corner of the globe – from the frozen Arctics to the searing Sahara. 
              And with over 8.7 million species documented till date, 
              the earth is the only planet in the universe where life is known to exist.

Advancements in technology have opened up even more insights about life and its constituents. 
For instance, discoveries such as viruses have scrutinized traditional definitions and pushed scientists to look at life from a whole new perspective. </p>

            <h3>WHAT YOU WILL LEARN</h3>
            <hr />
            
            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>PLANT BIOLOGY</span>
            <div className="dropdown-content">
            <p>Plants are one of the most essential living organisms on earth. 
              They are immensely beneficial to both animals and human beings. They produce oxygen which is crucial for the survival of living organisms. Trees provide shelter to animals and are also known for their medicinal benefits. Overall, different parts of plants have different roles to perform. 
              They act as a source of food and oxygen and maintain the ecological balance.</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=8-G7D_sy7qE" target="_blank">WATCH NOW </a></button>
            </div>
            </div>
            <br/>
            <hr/>
                
            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>CELL BIOLOGY</span>
            <div className="dropdown-content">
            <p>The cell is called as a fundamental unit of life because every single living species is composed of a cell.
            If we were to “break apart” the human body at the microscopic level, then the cell would constitute the most basic unit of life.
            Cell biology is a branch of biology, which is mainly involved with the study of the cell, its types, structure, functions and its interaction with other cells. Cell biology is also called as the cytology 
            and is derived from the Greek word “kytos”, meaning vessel.
            </p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=vwAJ8ByQH2U" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr/>
                
            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>HUMAN ANATOMY</span>
            <div className="dropdown-content">
            <p>Anatomy can be defined as a study of the internal structure and organs of living beings. 
              In the field of medicine, life science and in other research sectors, anatomy plays a vital role by helping to learn about the structures, characteristic features 
              and other different parts in all living organisms, including plants, animals, birds, insects and humans.In this mofule you will deal with anatomy of human</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=uBGl2BujkPQ" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr/>

            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>MICROBIOLOGY</span>
            <div className="dropdown-content">
            <p>Microbiology is the study of a variety of living organisms which are invisible to the naked eye like bacteria and fungi and many other microscopic organisms. 
              Although tiny in size these organisms form the basis for all life on earth.Microorganisms have played a key role in the evolution of the planet earth.Microorganisms are very important to the environment, human health and the economy. 
              Few have immense beneficial effects without which we could not exist.</p>
    
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=9mbfSFFkYyI" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr/>

            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>ZOOLOGY</span>
            <div className="dropdown-content">
            <p>Zoology is the branch of biology concerned with the study animals and animal kingdom. It is also known as animal biology. The study of zoology includes the interaction of animal kingdom in their ecosystems 
              such as classification, habits, structure,  embryology, distribution, evolution, and extinct species.</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=mRidGna-V4E" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr />
          
            </div>
                <div className="grid-child right">
              
                <i className='fa'>&#xf254;</i><span id="heading">LENGTH  : </span><span>     5-Weeks</span><br /><hr />
                <i  className='fa'>&#xf3fd;</i><span id="heading">EFFORT  : </span><span>     2-3 hours per week</span><br /><hr />
                <i  className='fa'>&#xf02b;</i><span id="heading">PRICE  :   </span><span>    Free</span><br /><hr />
                <i className="fa">&#xf19c;</i><span id="heading">INSTITUTION  : </span><span>    London University</span><br/><hr/>
                <i className="fa">&#xf19d;</i><span id="heading">SUBJECT  : </span><span>       Biology</span><br /><hr />
                <i  className='fa'>&#xf0a3;</i><span id="heading">LEVEL  :  </span><span>      Intermediate</span><br /><hr />
                <i  className='fa'>&#xf557;</i><span id="heading">LANGUAGE  : </span><span>     English</span><br /><hr />
                <i className='fa'>&#xf5da;</i><span id="heading">COURSE TYPE  :</span><span>   Self-paced</span><br /><hr /></div>
                </div>
                
                <div class="container-fluid">
                <h3>INSTRUCTORS</h3>
                  
                <div className="card-group2">
                <div className="card2">
    
    <div className="card-body2">
    <img className="card-img-top" src={Mavatar} alt="Card image"  />
      <h4 className="card-text2">Noah Dawson</h4></div>
      </div>
      
                <div className="card2">
    <div className="card-body2">
    <img className="card-img-top" src={Favatar} alt="Card image"  />
      <h4 className="card-text2">Olivia Ashley</h4></div>
      </div>

      <div className="card2">
    
    <div className="card-body2">
    <img className="card-img-top" src={M1avatar} alt="Card image"  />
      <h4 className="card-text2">Benjamin Cohen</h4></div>
      </div>
      </div>
      <br />
      <button className="button" onClick={this.toggleModal}>ENROLL NOW</button>
      </div>
      <br/>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
           <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
           <ModalBody>
               <Form onSubmit={this.handleLogin}>
                   <FormGroup>
                       <Label htmlFor="username">Username</Label>
                       <Input type="text" id="username" name="username" 
                            />
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor="password">Password</Label>
                       <Input type="password" id="password" name="password"
                            />
                   </FormGroup>
                   <FormGroup check>
                       <Label check>
                           <Input type="checkbox" name="remember"
                             /> 
                           Remember me
                       </Label>
                   </FormGroup>
                   <Button type="submit" value="submit" color="bg-primary">Login</Button>

               </Form>
           </ModalBody>
       </Modal>
      </div>

      
    
      
    )
  }
}
  export default Biology;
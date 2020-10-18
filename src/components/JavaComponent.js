import React from 'react';
import J3 from './images/J3.jpg/.';
import Favatar from './images/favatar.jpeg/.';
import Mavatar from './images/mavatar.jpeg/.';
import M1avatar from './images/m1avatar.jpeg/.';

class Java extends React.Component {
render(){
    return (
      <div className="container-fluid">
           <img src={J3} alt="Java" />  
        <div className="grid-container">
            <div className="grid-child">
            <h1>JAVA    <button className="button" onclick="#">ENROLL NOW</button> </h1>
        
            <h3>ABOUT THIS COURSE</h3>
           
            <p>Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere, meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. </p>

            <h3>WHAT YOU WILL LEARN</h3>
            <hr />
            
            
            <div className="dropdown">
            <i  className='fas'>&#xf103;</i><span>LINKED LISTS</span>
            <div className="dropdown-content">
            <p>A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below image: In simple words, a linked list consists of nodes where each node contains a data field and a reference (link) to the next node in the list.
              In this module ,you will learn about various kinds of linked lists.</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=giJimUEkI7U" target="_blank">WATCH NOW </a></button>
            </div>
            </div>
            <br/>
            <hr/>
                
            
            <div className="dropdown">
            <i  className='fas'>&#xf103;</i><span>INHERITANCE</span>
            <div className="dropdown-content">
            <p>Now that you’re in full swing with the project, let’s take a closer look at some concepts that you have already been using in your code. Specifically, the keyword “extends”. What exactly does it mean that your program “extends PApplet”? To answer this question we’ll need to dive into the details of how Java allows for Class Hierarchies through Inheritance and Polymorphism. These fundamental and powerful concepts will serve you well in the future! We’ll use these ideas to allow for displaying markers differently. If you feel you’re already comfortable with Inheritance and Polymorphism, feel free to dive straight into the project (programming assignment) for this week. As you work with the project, feel free to have some fun and introduce new levels of class hierarchies for improved functionality.</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=nixQyPIAnOQ" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr/>
                
            
            <div className="dropdown">
            <i  className='fas'>&#xf103;</i><span>INTRODUCTION TO GRAPHS</span>
            <div className="dropdown-content">
            <p>This week we'll start getting technical, introducing you to the central data structure in the course: Graphs. You'll learn the basics and then have a chance to dive in a little deeper into the code, getting ready to start building that Google Maps-like application..</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=t0r04fYdT7U" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr/>

            
            <div className="dropdown">
            <i  className='fas'>&#xf103;</i><span>FINDING SHORTEST PATHS IN GRAPH</span>
            <div className="dropdown-content">
            <p>In the past two weeks, you've developed a strong understanding of how to design classes to represent a graph and how to use a graph to represent a map. In this week, you'll add a key feature of map data to our graph representation -- distances -- by adding weights to your edges to produce a "weighted graph". Although this might seem like a small change, the algorithms that work for unweighted graphs may prove ineffective for weighted graphs. To address this problem, you'll explore more advanced shortest path algorithms. First, you'll see how to find the shortest path on a weighted graph, then you'll see how to find it more quickly. In the project, you'll apply these ideas to create the core of any good mapping application: finding the shortest route from one location to another.
            </p>
    
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=SZXXnB7vSm4" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr/>

            
            <div className="dropdown">
            <i  className='fas'>&#xf103;</i><span>MASTERING THE SOFTWARE INTERVIEW</span>
            <div className="dropdown-content">
            <p>You’ve hit a major milestone as a computer scientist and are becoming a capable programmer. You now know how to solve problems, write algorithms, and analyze solutions; and you have a wealth of tools (like data structures) at your disposal. You may now be ready for an internship or (possibly) an entry-level software engineering job. But can you land the internship/job? It depends in part on how well you can solve new technical problems and communicate during interviews. How can you get better at this? Practice!
             With the support of Google’s recruiting and engineering teams we’ve provided tips, examples, and practice opportunities in this course that may help you with a number of tech companies. We’ll assist you to organize into teams to practice. Lastly, we’ll give you basic job search advice, and tips for succeeding once you’re on the job.</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=bBPHpH8aKjw" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr />
          
            </div>
                <div className="grid-child right">
              
                <i className='fas'>&#xf254;</i><span id="heading">LENGTH  : </span><span>     10-Weeks</span><br /><hr />
                <i  className='fas'>&#xf3fd;</i><span id="heading">EFFORT  : </span><span>     7-8 hours per week</span><br /><hr />
                <i  className='fas'>&#xf02b;</i><span id="heading">PRICE  :   </span><span>    80$</span><br /><hr />
                <i className="fa">&#xf19c;</i><span id="heading">INSTITUTION  : </span><span>   Stanford </span><br /><hr />
                <i className="fa">&#xf19d;</i><span id="heading">SUBJECT  : </span><span>       Java</span><br /><hr />
                <i  className='fas'>&#xf0a3;</i><span id="heading">LEVEL  :  </span><span>      Intermediate</span><br /><hr />
                <i  className='fas'>&#xf557;</i><span id="heading">LANGUAGE  : </span><span>     English</span><br /><hr />
                <i className='fas'>&#xf5da;</i><span id="heading">COURSE TYPE  :</span><span>   Self-paced</span><br /><hr />
              
                </div>
                </div>
                
                <div class="container-fluid">
                <h3>INSTRUCTORS</h3>
                  
                <div className="card-group">
                
                <div className="card">
    <div className="card-body">
    <img className="card-img-top" src={Mavatar} alt="Card image"  />
      <h4 className="card-text">George Linton</h4></div>
      </div>

      <div className="card ">
    <div className="card-body">
    <img className="card-img-top" src={Favatar} alt="Card image"  />
      <h4 className="card-text">Diana Espinoza</h4></div>
      </div>

      <div className="card">
    
    <div className="card-body">
    <img className="card-img-top" src={M1avatar} alt="Card image"  />
      <h4 className="card-text">Naveen Richard </h4></div>
      </div>
      </div>
      <br />
      <button className="button" onclick="#">ENROLL NOW</button>
      </div>
      
      </div>
      
    
      
    )
  }
}
  export default Java;


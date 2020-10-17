import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent'
import { BrowserRouter } from 'react-router-dom';
// import MediumBlogs from "./components/MediumBlogs/mediumBlogs.jsx";
// import axios from 'axios';
// import Header from './components/Header/Header';
// import AddPost from './components/AddPost/AddPost';
// import Post from './components/Post/Post';


// class App extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       allPosts: []
//     }
//   }

// componentDidMount() {
    
//   axios.get('https://letsdiscuss00.herokuapp.com/get-all-posts')
//   .then((response) => {
//     // console.log(response.data);
//     this.setState({allPosts: response.data});
//     // console.log(response.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// }

class App extends Component {


  render() {
    // let allPostList = this.state.allPosts.slice(0,3).map((post, index) => {
    return (
    //   <Post key = {index} postData = {post} />
    //   )
    // });
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

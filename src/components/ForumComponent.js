import React, { Component } from 'react';
import Header from './Header/Header';
import AddPost from './AddPost/AddPost';
import Post from './Post/Post';
import axios from 'axios';

class Forum extends React.Component {
   constructor(props) {
     super();
     this.state = {
       allPosts: []
     }
    }

 componentDidMount() {
    
  axios.get('https://letsdiscuss00.herokuapp.com/get-all-posts')
  .then((response) => {
    this.setState({allPosts: response.data});
   })
   .catch((err) => {
    console.log(err);
   })
 }

 render() {
    let allPostList = this.state.allPosts.slice(0,3).map((post, index) => {
    return (
        <>
        <AddPost />
        <Post key = {index} postData = {post} />
        </>
      )
    });
    return(
        allPostList)
}
}

export default Forum;
import React, { Component } from 'react'
import axios from 'axios';

import './Post.css';
import Button from './../Button/Button';
import Input from './../Input/Input';


class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postData: this.props.postData,
            commentValue: ''
        }
    }

    onClapHandler = (_id) => {
        console.log("clapped");

        axios.post('https://letsdiscuss00.herokuapp.com/clap', { postId: _id })
            .then((response) => {
                console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                console.log(console.error);

            });
    }

    onCommentHandler = (_id, commentValue) => {
        console.log("commented", _id, commentValue);
        
        axios.post('https://letsdiscuss00.herokuapp.com/comment', { postId: _id, commentValue: commentValue })
            .then((response) => {
                console.log(response.data);
                window.location.reload();

            })
            .catch((error) => {
                console.log(console.error);

            });
    }


    onChangeHandler = (event) => {
        this.setState({commentValue: event.target.value});
    }
    

    render() {

        const commentList = this.state.postData.comments.map((comment, index) => {
            return (
                <li key = {index} className="Comment">{comment}</li>
            )
        });
        return (
                <div className="card">
                    <div className="text-center">
                        <h2>
                        {this.state.postData.postText}
                        </h2>
                    </div>
                    <hr />
                    <div className="card-body">
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-2 text-center mt-1 mb-1">
                                    <Button
                                        btnSize="SmallButton"
                                        clicked={() => { this.onClapHandler(this.state.postData._id) }}
                                        title="Clap!"
                                    />
                                </div>
                                <div className="text-center mt-1 mb-3">
                                    <h4>{this.state.postData.clapsCount} Votes</h4>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-5 ml-4">
                                    {this.state.postData.comments.length} Comments
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7 mt-1">
                                <Input
                                    inputSize="SmallInput"
                                    type="text"
                                    placeholder="Add New Comment!"
                                    changed = {(event) => { this.onChangeHandler(event) }}
                                />
                                </div>
                                <div className="col-5 mt-1">
                                    <Button
                                    btnSize="SmallButton"
                                    clicked={() => { this.onCommentHandler(this.state.postData._id, this.state.commentValue) }}
                                    title="Comment"
                                    />
                                </div>
                            </div>
                                <div className="row">
                                    <div className="PostContainer">
                                    <div className="Comments">
                                    {commentList}
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>                
        )
    }
}

export default Post

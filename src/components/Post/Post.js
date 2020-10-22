import React, { Component } from 'react'
import axios from 'axios';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Jumbotron } from 'reactstrap';
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
            <div className="container mt-3">
            <div className="row">
            <div className="col-12">
            <div className="card1">
                    <CardTitle>
                    <center><h3>
                        {this.state.postData.postText}
                    </h3></center><hr />
                    </CardTitle>
                    <CardBody>
                    <div className="container">
                            <div className="row">
                                    <Button
                                        btnSize="SmallButton"
                                        clicked={() => { this.onClapHandler(this.state.postData._id) }}
                                        title="Clap!"
                                    />
                                <div className="col-sm-3 col-5 mt-1 mb-3 offset-1">
                                 <h5>{this.state.postData.clapsCount} Votes </h5> 
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-3 offset-1">
                                    <h5>{this.state.postData.comments.length} Comments</h5>
                                </div>
                            </div>
                            <div className="row">
                                <Input
                                    inputSize="SmallInput"
                                    type="text"
                                    placeholder="Add New Comment"
                                    changed = {(event) => { this.onChangeHandler(event) }}
                                />
                                <div className="col-sm-1 col-5 mt-1">
                                    <Button
                                    btnSize="SmallButton"
                                    clicked={() => { this.onCommentHandler(this.state.postData._id, this.state.commentValue) }}
                                    title="Comment"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 offset-1">
                                <div className="PostContainer">
                                <div className="Comments">
                                    {commentList}
                                </div>
                                </div>
                                </div>
                            </div>
                    </div>

                    </CardBody>
                </div>
                    </div>
                </div>   
        </div>
             
        )
    }
}

export default Post

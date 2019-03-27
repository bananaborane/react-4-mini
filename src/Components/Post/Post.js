import React, { Component } from "react";
import posts from "./../../post_data.json";
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  componentDidMount() {
    // This is where you would make an axios call to a server in a fullstack application
    // but for today we'll be just be filtering an array of dummy data
    console.log(this.props);
    // will not display since it is not a component WITHIN APP.js
    let post = posts.find(post => post.id === 1*this.props.match.params.id);
    // posts array is from post_data.json, finds the first id that matches the id in the query
    this.setState({
      title: post.title,
      content: post.content
    });
  }
  render() {
    const { title, content } = this.state;
    return (
      <div className="Post">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  }
}

export default Post;

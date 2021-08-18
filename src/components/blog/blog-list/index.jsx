import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.fetchBlogs();
  }
  fetchBlogs = async () => {
    const response = await fetch(process.env.REACT_APP_URL + "/blogposts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const res = await response.json();
    console.log(res);
    this.setState({
      posts: res,
    });
  };

  render() {
    return (
      <Row>
        {this.state.posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.id} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}

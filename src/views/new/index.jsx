import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";

export default class NewBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      cover: "",
      readTime: {
        value: 2,
        unit: "minute",
      },
      author: {
        name: "",
        avatar: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, key) {
    this.setState({
      ...this.state,
      [key]: value,
    });
    console.log(value);
  }

  sendForm = async (e) => {
    e.preventDefault();
    const res = await fetch(process.env.REACT_APP_URL + "/blogposts", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    console.log(result);
  };

  render() {
    return (
      <Container className="new-blog-container">
        <Form onSubmit={this.sendForm} className="mt-5">
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Title"
              onChange={(event) =>
                this.handleChange(event.target.value, "title")
              }
            />
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              size="lg"
              as="select"
              onChange={(event) =>
                this.handleChange(event.target.value, "category")
              }
            >
              <option value="cat1">Category1</option>
              <option value="cat2">Category2</option>
              <option value="cat3">Category3</option>
              <option value="cat4">Category4</option>
              <option value="cat5">Category5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-content" className="mt-3">
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill
              value={this.state.content}
              // onChange={this.handleChange}
              onChange={(value) => this.handleChange(value, "content")}
              className="new-blog-content"
            />
          </Form.Group>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

// import React, { Component } from "react";

// import "react-quill/dist/quill.snow.css";
// import ReactQuill from "react-quill";
// import { Container, Form, Button } from "react-bootstrap";
// import "./styles.css";
// export default class NewBlogPost extends Component {
//   // const NewBlogPost = () => {
//   constructor(props) {
//     super(props);
//     this.state = { text: "" };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(value) {
//     this.setState({ text: value });
//   }

//   render() {
//     return (
//       <Container className="new-blog-container">
//         <Form className="mt-5">
//           <Form.Group controlId="blog-form" className="mt-3">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               size="lg"
//               placeholder="Title"
//               onChange={(e) => this.handeleChange("title", e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group controlId="blog-category" className="mt-3">
//             <Form.Label>Category</Form.Label>
//             <Form.Control
//               size="lg"
//               as="select"
//               onChange={(e) => this.handeleChange("category", e.target.value)}
//             >
//               <option>Category1</option>
//               <option>Category2</option>
//               <option>Category3</option>
//               <option>Category4</option>
//               <option>Category5</option>
//             </Form.Control>
//           </Form.Group>
//           <Form.Group controlId="blog-content" className="mt-3">
//             <Form.Label>Blog Content</Form.Label>
//             <ReactQuill
//               // value={this.state.text}
//               // onChange={this.handleChange}
//               onChange={(e) => this.handeleChange("content", e.target.value)}
//               className="new-blog-content"
//             />
//           </Form.Group>
//           <Form.Group className="d-flex mt-3 justify-content-end">
//             <Button type="reset" size="lg" variant="outline-dark">
//               Reset
//             </Button>
//             <Button
//               type="submit"
//               size="lg"
//               variant="dark"
//               style={{ marginLeft: "1em" }}
//             >
//               Submit
//             </Button>
//           </Form.Group>
//         </Form>
//       </Container>
//     );
//   }
// }

// // export default NewBlogPost;

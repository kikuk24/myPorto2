// import Editor from "../data/Editor"
import { Container,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { blogs } from '../data';


const PostPage = () => {
  const [value, setValue] = useState('');


  return (
    <div className="postpage">
      <div className="content">
        <Container>
          <Row>
            <Col lg="8">
              <div className="content-edit">
                <input type="text" placeholder="Title" className="form-control mb-2" />
                <div className="editorContainer">
                <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
              </div>
              
            </Col>
            <Col lg="4">
              <div className="content-menu">
                <div className="menu">
                  <div className="item">
                    <h1>Publish</h1>
                    <span>
                      <b>Status : </b> Draft 
                    </span>
                    <span>
                      <b>Visibility : </b> Public
                    </span>
                    <input type="file" style={{display:"none"}} name="" id="file" />
                    <label className="file" htmlFor="file">Upload Image</label>
                    <div className="button-post">
                      <button>Save as draft</button>
                      <button>Update</button>
                  </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    {blogs.map((blog) => {
                      return(                      
                      <div key={blog.id} className="cat">
                      <input type="radio" name="cat" id="art" value="art" />
                          <label htmlFor="art"> {blog.tag }</label>
                    </div>)
                    })}
                </div>
              </div>
              </div>
            </Col>
          </Row>
            
        </Container>
        </div>
      </div>
  )
}

export default PostPage
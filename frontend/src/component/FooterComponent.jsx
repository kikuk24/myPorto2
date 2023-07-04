import { Container, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import {FaWhatsapp,FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'




const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">afandi.</h3>
            <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, blanditiis est. Eos mollitia laudantium recusandae dicta labore non aliquid voluptatem.</p>
            <div className="no">
              <Link className="text-decoration-none">
                <FaWhatsapp />
                <p className="m-0">+62 896123890</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
              <FaEnvelope/>
              <p className="m-0">loerema@gmail.com</p>
              <FaFacebook/>
              </Link> 
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col">
            <h5 className="tx fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="">About</Link>
            <Link to="">Blog</Link>
            
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="tx fw-bold mb-3">Subscribe untuk info menarik</h5>
          <div className="subscribers">
            <input type="text" placeholder="Subscribe" />
            <button className="rounded-end rounded-0">Subscribe</button>
          </div>
          <div className="social">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedin/>
          </div>
          
          </Col>
        </Row>
        <Row>
          <p className="text-center px-md-0 px-3">&copy;Copyright { new Date().getFullYear() } by <span className="fw-bold">KikukCode</span></p>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent
import { Container, Row, Col } from "react-bootstrap"
import LoginComponent from "../component/LoginComponent"
import gambar from "../assets/img/gambarkoding.jpg"


const LoginPage = () => {
  return (<div>
    <div className="login-box w-100 min-vh-100 d-flex align-items-center">
      <Container>
      <Row className="d-flex align-items-center">
        <Col lg="6">
        <LoginComponent/>
        </Col>
        <Col lg="6">
        <img src={gambar} alt="" srcSet="" />
        </Col>
      </Row>
    </Container>
    </div>
    
      
      </div>
  )
}

export default LoginPage
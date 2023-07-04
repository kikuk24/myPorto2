
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const LoginComponent = () => {
  

  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">masukan email yang benar
            </Form.Text>
          </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="pass" type="password" placeholder="Password" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
          <button className='btn btn-outline-dark' type="submit">Login</button>
          <p className='mt-2'> Belum punya akun? <a href='/'>Sign Up</a></p>
          <p><a href="/"> Lupa Kata Sandi</a> </p>
        </Form>
      </Container>
    </div>
    
  );
}

export default LoginComponent;
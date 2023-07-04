import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { navLinks } from '../data';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



const NavBar = () => {
  const [color, setColor] = useState(false);
 
 
  const bgColor = () => {
    if (window.scrollY > 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    bgColor();
    window.addEventListener('scroll', bgColor);
  })

  let navigate = useNavigate()

  return (
    <div>
      <Navbar expand="lg" className={color ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home">afandi.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto text-center">
                {navLinks.map((link) => {
                  return (
                    <div className='nav-link' key={link.id}>
                      <NavLink to={link.path} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} >{link.text}</NavLink>
                    </div>
                  )
                })}
            </Nav>
            <div className='text-center'>
              <button className='btn btn-outline-dark' onClick={() => navigate("/login")}>Join With Me</button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
    
  );
}

export default NavBar;
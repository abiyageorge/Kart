import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-success-subtle">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              height={'70px'}
              className='me-3'
              src="https://media.istockphoto.com/id/1176091798/vector/logo-with-leaves-green-foliage-icon-in-a-minimalist-style.jpg?s=612x612&w=0&k=20&c=FNlHI2yP-g1tdcZkTg8RZ1LQOSk1GvoAx-cBNsMDEUo=" alt="" />
            <span style={{fontSize:'2rem', fontWeight:'roboto', color:'#4CAF50'}}>GREENY</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Use Link component for routing */}
              <Nav.Link as={Link} to="/" className='btn border rounded me-3'>
                Home <Badge bg="secondary"></Badge>
              </Nav.Link>
              <Nav.Link as={Link} to="/wishlist" className='btn border rounded me-3'>
                Wishlist <Badge bg="secondary"></Badge>
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className='btn border rounded me-3'>
                Cart <Badge bg="secondary"></Badge>
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className='btn border rounded'>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

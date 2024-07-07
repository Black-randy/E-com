import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from './img/logo.svg';  // Adjust path as necessary

function Header({ currentView, setCurrentView }) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar-light" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Willow Tree
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Portfolio">Portfolio</Nav.Link>

              <Nav.Link href="/product">Product</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">SignUp</Nav.Link>
              <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Admin" > Admin </NavDropdown.Item>
                <NavDropdown.Item href="/Admin">Only Admin function</NavDropdown.Item>
                <NavDropdown.Item href="/Admin">is available for Now</NavDropdown.Item>
                <NavDropdown.Item href="/Admin">Function place Holder 001</NavDropdown.Item>
                <NavDropdown.Item href="/Admin">Function place Holder 002</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

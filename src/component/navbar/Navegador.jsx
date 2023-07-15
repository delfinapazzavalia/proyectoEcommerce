import React from 'react';
import '../navbar/navegador.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from "../img/icononav.png"

function Navegador() {
  return (
    <>
      <div className='navbarContent'>
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
            <img
                      src={icon}
                      alt="Imagen"
                      width="40"
                      height="40"
                      className=""
                    />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Nav.Link href="#">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1159/1159766.png?w=740&t=st=1689363684~exp=1689364284~hmac=b5422ead9bf9848ef4fb762ac30ebf07d71710cd8029e6bbb1de69d12fb1d66c"
                      alt="Imagen"
                      width="20"
                      height="20"
                      className=""
                    />
                  </Nav.Link>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navegador;